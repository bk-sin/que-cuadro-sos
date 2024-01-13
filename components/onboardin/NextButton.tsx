import React from 'react'
import { type SharedValue } from 'react-native-reanimated'
import OnboardingData from '../../constants/content/OnboardingData'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import Shadows from '../../constants/Shadows'
import Colors from '../../constants/Colors'
import IconRight from '../../assets/icons/Icon - Right.svg'

const NextButton: React.FC<{
  activeIndex: SharedValue<number>
  handleSlide: (to: number) => void
}> = ({ activeIndex, handleSlide }) => {
  const handleNext = (): void => {
    if (activeIndex.value >= OnboardingData?.length - 1) {
      router.push('/home/')
    } else {
      handleSlide(activeIndex.value + 1)
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      accessible
      onPress={() => {
        handleNext()
      }}
      style={[
        Shadows.button.primary,
        {
          backgroundColor: Colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          flexGrow: 0,
          padding: 24,
          borderRadius: 36,
          zIndex: 5,
          bottom: -38,
          position: 'absolute'
        }
      ]}
    >
      <IconRight />
    </TouchableOpacity>
  )
}

export default NextButton
