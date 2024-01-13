import { View, Text, TouchableOpacity, type ViewStyle } from 'react-native'
import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState
} from 'react'
import Shadows from '../../constants/Shadows'
import Colors from '../../constants/Colors'
import { height, margin } from '../../constants/Spacing'
import { LinearGradient } from 'expo-linear-gradient'
import Fonts from '../../constants/Fonts'
import ClubData from '../../constants/game/Clubs'
import { Image } from 'expo-image'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { router } from 'expo-router'
import useScoreStore from '../../store/useScoreStore'

export const Button: React.FC<{
  tx: string
  active?: boolean
  onPress: () => void
  style?: ViewStyle
  variant?: 'primary' | 'secondary'
}> = ({ tx = 'button', active = false, onPress, style, variant = 'primary' }) => {
  const styles = {
    primary: {
      backgroundColor: Colors.primary
    },
    secondary: {
      backgroundColor: Colors.secondary
    },
    outlined: {
      backgroundColor: Colors.background
    }
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Shadows.header,
        {
          backgroundColor: active ? Colors.primary : Colors.background,
          borderRadius: 12,
          paddingVertical: 20,
          borderWidth: 2,
          borderColor: active ? Colors.white : 'rgba(255,255,255, 0.4)',
          alignItems: 'center'
        },
        styles[variant],
        style
      ]}
    >
      <Text style={[Fonts.text18]}>{tx}</Text>
    </TouchableOpacity>
  )
}

interface Club {
  ID: number
  Name: string
  ShortName: string
  ImageURL: string
}

interface QuestionStrategy {
  questionData: {
    QuestionComponent: React.FC
    options: string[]
    correctAnswer: string
  }
  getQuestion: () => void
}

function shuffle (array: any[]): any[] {
  return array.sort(() => Math.random() - 0.5)
}

const GuessClubWithImage: React.FC<{
  clubs: Club[]
  setWin: Dispatch<SetStateAction<null | boolean>>
}> = ({ clubs, setWin }) => {
  const [questionData, setQuestionData] = useState<{
    questionText: string
    options: Club[]
    correctAnswer: Club
  }>({
    questionText: '',
    options: [],
    correctAnswer: ClubData[0]
  })

  const setQuestion = (): void => {
    const clubCorrecto = clubs[Math.floor(Math.random() * clubs.length)]
    const opcionesIncorrectas = clubs
      .filter((club) => club.ID !== clubCorrecto.ID)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    const opciones = shuffle([clubCorrecto, ...opcionesIncorrectas])
    setQuestionData({
      questionText: '¿De qué club es el escudo?',
      options: opciones,
      correctAnswer: clubCorrecto
    })
  }

  useEffect(() => {
    setQuestion()
  }, [])
  const { updateScore } = useScoreStore()

  const handleAnswer = (selectedAnswer: Club | null): void => {
    if (selectedAnswer?.ID === questionData.correctAnswer.ID) {
      void updateScore(true)
      setWin(true)
    } else {
      void updateScore(false)
      setWin(false)
    }
  }

  const progress = useSharedValue(1)
  useEffect(() => {
    progress.value = withTiming(0, { duration: 5000 })
  }, [])

  useDerivedValue(() => {
    progress.value === 0 && runOnJS(handleAnswer)(null)
  }, [])

  const barStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`
    }
  })
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        maxWidth: 500,
        marginHorizontal: 'auto'
      }}
    >
      <View
        style={{
          width: '100%',
          height: 8,
          backgroundColor: Colors.backgroundDark,
          marginBottom: 50,
          borderRadius: 24
        }}
      >
        <Animated.View
          style={[
            {
              width: '100%',
              minWidth: 8,
              height: 8,
              backgroundColor: Colors.primary,
              marginBottom: 50,
              borderRadius: 24
            },
            barStyle
          ]}
        />
      </View>
      <View
        style={[
          {
            backgroundColor: Colors.white,
            borderRadius: 40,
            paddingBottom: 24,
            paddingHorizontal: 24,
            alignItems: 'center',
            marginBottom: 40
          },
          Shadows.container
        ]}
      >
        <Image
          source={{ uri: questionData.correctAnswer.ImageURL }}
          style={{
            width: height < 700 ? 100 : 150,
            height: height < 700 ? 100 : 150,
            top: -30
          }}
        />
        <Text style={[Fonts.title, { textAlign: 'center', top: -8 }]}>
          {questionData.questionText}
        </Text>
      </View>
      <View style={{ gap: 16 }}>
        {questionData.options.map((club, index) => {
          return (
            <Button
              tx={club?.Name}
              key={index}
              onPress={() => {
                handleAnswer(club)
              }}
            />
          )
        })}
      </View>
    </View>
  )
}

const GameCounter: React.FC<{
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
}> = ({ count, setCount }) => {
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount(count - 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(countdownInterval)
    }, 3000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [count])

  return (
    <Animated.Text
      style={[
        Fonts.title,
        {
          textAlign: 'center',
          color: Colors.white,
          fontSize: height / 2,
          lineHeight: height / 1.5
        }
      ]}
    >
      {count}
    </Animated.Text>
  )
}

interface GameProps extends QuestionStrategy {}

const GameScreen: React.FC<GameProps> = () => {
  const [count, setCount] = useState(3)
  const [win, setWin] = useState<null | boolean>(null)

  useEffect(() => {
    if (win === true || win === false) {
      router.replace({ pathname: '/game/result', params: { win: win.toString() } })
      return
    }
    return () => {
      router.replace('/home/')
    }
  }, [win])

  return (
    <LinearGradient
      colors={Colors.backgroundGradient}
      style={{
        flex: 1,
        paddingHorizontal: margin
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ gap: 16, flex: 1, justifyContent: 'center' }}>
        {count !== 0
          ? (
          <GameCounter setCount={setCount} count={count} />
            )
          : (
          <GuessClubWithImage clubs={ClubData} setWin={setWin} />
            )}
      </View>
    </LinearGradient>
  )
}

export default GameScreen
