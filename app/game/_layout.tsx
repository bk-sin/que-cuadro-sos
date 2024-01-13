import React from 'react'
import { Stack } from 'expo-router'

const GameStack: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name='result' initialParams={{ win: 'false' }} ></Stack.Screen>
    </Stack>
  )
}

export default GameStack
