import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import OnboardingIllustration from '../../assets/images/onboarding.svg'
import Colors from '../../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import Fonts from '../../constants/Fonts'
import Shadows from '../../constants/Shadows'
import IconRight from '../../assets/icons/Icon - Right.svg'
import { router } from 'expo-router'

const OnboardingScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <LinearGradient
        colors={Colors.backgroundGradient}
        style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'center', alignItems: 'center' }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <OnboardingIllustration />
        <View
          style={[
            { backgroundColor: Colors.white, padding: 48, borderRadius: 40, zIndex: 1 },
            Shadows.container
          ]}
        >
          <Text style={[Fonts.title, { textAlign: 'center' }]}>
            {'Interesting QUIZ\nAwaits You'}
          </Text>
          <Text style={[Fonts.text16, { textAlign: 'center', marginTop: 12 }]}>
            {'play quizzes with your friends\nand get various prizes'}
          </Text>

          <View style={{ flexDirection: 'row', gap: 12, justifyContent: 'center', marginTop: 40, marginBottom: 42 }}>
            <View style={{ width: 28, height: 8, backgroundColor: Colors.grey3, borderRadius: 20 }} />
            <View style={{ width: 28, height: 8, backgroundColor: Colors.primary, borderRadius: 20 }}/>
            <View style={{ width: 28, height: 8, backgroundColor: Colors.grey3, borderRadius: 20 }} />
          </View>
          <View style={{ backgroundColor: 'red', alignItems: 'center' }}>

          <TouchableOpacity
          activeOpacity={0.95}
          accessible
          onPress={() => { router.push('/home/') }}
            style={[
              Shadows.button.primary,
              {
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 0,
                padding: 24,
                borderRadius: 36,
                zIndex: 5,
                bottom: -84,
                position: 'absolute'
              }
            ]}
          >
            <IconRight />
          </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default OnboardingScreen
