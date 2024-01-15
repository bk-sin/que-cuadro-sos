import { View, Text } from 'react-native'
import React from 'react'
import { Button } from './index'
import Fonts from '../../constants/Fonts'
import { router, useLocalSearchParams } from 'expo-router'
import Colors from '../../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import useScoreStore from '../../store/useScoreStore'

const LoseScreen: React.FC = () => {
  const { score, maxScore, updateScore } = useScoreStore()
  const { win } = useLocalSearchParams()
  const isWin = Boolean(win === 'true')
  return (
    <LinearGradient
        colors={Colors.backgroundGradient}
        style={{
          flex: 1,
          paddingHorizontal: 24,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
    <View style={{ alignSelf: 'center', maxWidth: 500, width: '100%', flex: 1, justifyContent: 'center' }}>
      <Text style={[Fonts.menu, { textAlign: 'center', marginBottom: 24 }]}>Tu puntaje maximo: {maxScore}</Text>
      <Text style={[Fonts.menu, { textAlign: 'center', marginBottom: 24 }]}>Tu puntaje: {score}</Text>
      <Text style={[Fonts.menu, { textAlign: 'center', marginBottom: 24 }]}>{isWin ? 'Ganaste' : 'Perdiste'}</Text>
      <Button tx='Volver a jugar' onPress={(): void => {
        router.replace('/game/')
        void updateScore(false)
      }} style={{ marginBottom: 16 }} />
      <Button tx='Menu principal' onPress={(): void => {
        router.replace('/home/')
        void updateScore(false)
      }} variant='secondary' />
    </View>
    </LinearGradient>
  )
}

export default LoseScreen
