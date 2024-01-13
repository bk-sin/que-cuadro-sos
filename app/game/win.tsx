import { View, Text } from 'react-native'
import React from 'react'
import Fonts from '../../constants/Fonts'
import { Button } from '../game/index'
import { router } from 'expo-router'
import Colors from '../../constants/Colors'

const LoseScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 24, backgroundColor: Colors.background }}>
      <Text style={[Fonts.menu, { textAlign: 'center', marginBottom: 24 }]}>Ganaste</Text>
      <Button tx='Volver a jugar' onPress={(): void => { router.replace('/game/') }} style={{ marginBottom: 16 }} />
      <Button tx='Menu principal' onPress={(): void => { router.replace('/home/') }} variant='secondary' />
    </View>
  )
}

export default LoseScreen
