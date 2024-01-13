import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import OnboardingData from '../../constants/content/OnboardingData'
import Animated, { type SharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated'
import Colors from '../../constants/Colors'

const DotIndicator: React.FC<{
  activeIndex: SharedValue<number>
  handleSlide: (to: number) => void
}> = ({ activeIndex, handleSlide }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40
      }}
    >
      {OnboardingData.map((_, index) => {
        const animatedColor = useAnimatedStyle(() => {
          return {
            backgroundColor: withSpring(activeIndex.value === index ? Colors.primary : Colors.grey3)
          }
        })
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handleSlide(index)
            }}

          ><Animated.View style={[{
            width: 28,
            height: 8,
            borderRadius: 20
          }, animatedColor]} /></TouchableOpacity>
        )
      })}
    </View>
  )
}

export default DotIndicator
