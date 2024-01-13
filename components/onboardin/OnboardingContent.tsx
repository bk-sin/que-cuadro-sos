import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import Colors from '../../constants/Colors'
import { Text, View } from 'react-native'
import OnboardingData from '../../constants/content/OnboardingData'
import Shadows from '../../constants/Shadows'
import Fonts from '../../constants/Fonts'
import DotIndicator from './DotIndicator'
import NextButton from './NextButton'

const OnboardingContent: React.FC = () => {
  const activeIndex = useSharedValue(0)
  const opacity = useSharedValue(0)
  const animateOpacity = (toValue: number): void => {
    opacity.value = withSpring(toValue)
  }

  const handleSlide = (to: number): void => {
    animateOpacity(0)
    setTimeout(() => {
      activeIndex.value = to
      animateOpacity(1)
    }, 200)
  }

  useEffect(() => {
    animateOpacity(1)
  }, [activeIndex])

  return (
    <View
      style={[
        {
          backgroundColor: Colors.white,
          padding: 48,
          borderRadius: 40,
          zIndex: 1,
          maxWidth: 500,
          width: '100%'
        },
        Shadows.container
      ]}
    >
      {OnboardingData.map(({ title, description }, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: opacity.value,
            display: activeIndex.value === index ? 'flex' : 'none'
          }
        })
        return (
          <Animated.View
            key={index}
            style={[
              animatedStyle
            ]}
          >
            <Text style={[Fonts.title, { textAlign: 'center' }]}>{title}</Text>
            <Text
              style={[Fonts.text16, { textAlign: 'center', marginTop: 12 }]}
            >
              {description}
            </Text>
          </Animated.View>
        )
      })}

      <DotIndicator
        activeIndex={activeIndex}
        handleSlide={handleSlide}
      />

      <NextButton
        activeIndex={activeIndex}
        handleSlide={handleSlide}
      />
    </View>
  )
}

export default OnboardingContent
