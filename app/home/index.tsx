import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import Decoration from '../../assets/images/Decoration.svg'
import { height, width } from '../../constants/Spacing'
import { Image } from 'expo-image'
import Fonts from '../../constants/Fonts'
import Shadows from '../../constants/Shadows'
import { router } from 'expo-router'
/* import Book from '../../assets/icons/Icon - Book.svg'
import Profile from '../../assets/icons/Icon - Profile.svg' */
import Arrow from '../../assets/icons/Icon - Arrow.svg'

const HomeScreen: React.FC = () => {
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
        <Decoration
          width={width}
          height={height}
          style={{ position: 'absolute', maxWidth: 500, maxHeight: 700 }}
        />
        <View style={{ position: 'absolute' }}>
          <TouchableOpacity onPress={() => { router.push('/game/') }}>
          <Image
            source={require('../../assets/images/Multiplayer.png')}
            style={{
              width,
              maxWidth: 500,
              maxHeight: height / 2,
              height: width * 0.736,
              objectFit: 'contain',
              resizeMode: 'contain'
            }}
          />
          <Text style={[Fonts.menu, { textAlign: 'center', marginTop: 16 }]}>
            {'MULTI\nPLAYER'}
          </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width, justifyContent: 'space-between', flexDirection: 'row', maxWidth: 500 }}>
        <TouchableOpacity
            activeOpacity={0.95}
            accessible
            onPress={() => {
              router.push('/home/')
            }}
            style={[
              Shadows.header,
              {
                backgroundColor: '#C2AEFF',
                padding: 16,
                borderTopRightRadius: 28,
                borderBottomRightRadius: 28,
                zIndex: 5
              }
            ]}
          >
            <Arrow width={24} height={24} />
          </TouchableOpacity>
        <TouchableOpacity
            activeOpacity={0.95}
            accessible
            onPress={() => {
              router.push('/home/')
            }}
            style={[
              Shadows.header,
              {
                backgroundColor: Colors.primary,
                padding: 16,
                borderTopLeftRadius: 28,
                borderBottomLeftRadius: 28,
                zIndex: 5
              }
            ]}
          >
            <Arrow width={24} height={24} style={{ transform: [{ rotate: '180deg' }] }} />
          </TouchableOpacity>
        </View>
        {/* <View style={{ position: 'absolute', width: '100%', flexDirection: 'row', justifyContent: 'center', gap: 16, paddingVertical: 16, bottom: height > 700 ? 64 : 32 }}>
          <TouchableOpacity
            activeOpacity={0.95}
            accessible
            onPress={() => {
              router.push('/home/')
            }}
            style={[
              Shadows.button.secondary,
              {
                backgroundColor: Colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 0,
                padding: 20,
                borderRadius: 28,
                zIndex: 5,
                borderWidth: 1,
                borderColor: Colors.white
              }
            ]}
          >
            <Book width={32} height={32} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.95}
            accessible
            onPress={() => {
              router.push('/home/')
            }}
            style={[
              Shadows.button.primary,
              {
                backgroundColor: Colors.primary,
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 0,
                padding: 20,
                borderRadius: 28,
                zIndex: 5,
                borderWidth: 1,
                borderColor: Colors.white
              }
            ]}
          >
            <Profile width={32} height={32} />
          </TouchableOpacity>

        </View> */}
      </LinearGradient>
    </ScrollView>
  )
}

export default HomeScreen
