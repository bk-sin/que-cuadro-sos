import React from 'react'
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import Colors from '../../constants/Colors'
import { gutter, margin, width } from '../../constants/Spacing'
import Fonts from '../../constants/Fonts'
import Shadows from '../../constants/Shadows'

const HomeStack: React.FC = () => {
  const Header: React.FC = () => {
    return (
    <View style={{ paddingTop: 40, position: 'absolute', alignItems: 'center', maxWidth: 500, maxHeight: 700, width: '100%', justifyContent: 'center', alignSelf: 'center' }}>
    <View style={{ height: 52, width: (width - (margin * 2)), flexDirection: 'row', justifyContent: 'space-between', maxWidth: 500, alignSelf: 'center', gap: gutter * 2, alignItems: 'center' }}>
      <View style={[{ width: 52, height: 52, backgroundColor: Colors.background, borderRadius: 100, borderWidth: 4, borderColor: Colors.white }, Shadows.header]} />
      <View style={[{ flex: 1, flexDirection: 'row' }]}>
        <View style={[{ backgroundColor: Colors.white, flex: 1, alignSelf: 'center', height: 10, padding: 1, borderRadius: 12, paddingRight: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }, Shadows.header]}>
          <View style={{ backgroundColor: Colors.primary, width: '55%', minWidth: 8, height: 8, borderRadius: 12 }} />
        </View>
        <View style={{ display: 'flex', backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', borderRadius: 12, paddingVertical: 5, paddingHorizontal: 9, borderWidth: 1, borderColor: Colors.white, alignSelf: 'center', zIndex: 2 }}>
          <Text style={Fonts.header.level}>12</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        <Text style={[Fonts.text14, { color: Colors.white }, { textShadowColor: 'rgba(0,0,0,0.2)', textShadowRadius: 10 }]}>Points</Text>
        <Text style={[Fonts.header.points, { textShadowColor: 'rgba(0,0,0,0.2)', textShadowRadius: 10 }]}>231</Text>
      </View>
    </View>
    </View>
    )
  }
  return (
    <Stack screenOptions={{
      header: () => <Header />

    }} >

    </Stack>
  )
}

export default HomeStack
