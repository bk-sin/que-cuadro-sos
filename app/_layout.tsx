import { Stack } from 'expo-router'
import React from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins'

void SplashScreen.preventAutoHideAsync()

const MainStack: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold
  })

  if (!fontsLoaded && (fontError == null)) {
    return null
  }

  return (

      <Stack
        screenOptions={{
          headerShown: false,
          statusBarTranslucent: true,
          statusBarStyle: 'inverted'
        }}
        initialRouteName='onboarding'
      >
      </Stack>
  )
}

export default MainStack
