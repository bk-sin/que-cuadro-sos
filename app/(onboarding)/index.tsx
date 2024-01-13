import { ScrollView } from 'react-native'
import React from 'react'
import OnboardingIllustration from '../../assets/images/onboarding.svg'
import Colors from '../../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import OnboardingContent from '../../components/onboardin/OnboardingContent'

const OnboardingScreen = (): JSX.Element => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
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
        <OnboardingIllustration />
        <OnboardingContent />
      </LinearGradient>
    </ScrollView>
  )
}

export default OnboardingScreen
