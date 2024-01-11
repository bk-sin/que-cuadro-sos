import { type TextStyle } from 'react-native'
import Colors from './Colors'

interface FontsType {
  title: TextStyle
  menu: TextStyle
  text14: TextStyle
  text16: TextStyle
  header: { level: TextStyle, points: TextStyle }
}

const weight = {
  extra: 'Poppins_800ExtraBold',
  bold: 'Poppins_700Bold',
  semi: 'Poppins_600SemiBold',
  medium: 'Poppins_500Medium',
  regular: 'Poppins_400Regular'
}

const Fonts: FontsType = {
  title: {
    fontFamily: weight.bold,
    fontSize: 28,
    lineHeight: 42,
    color: Colors.text
  },
  menu: {
    fontFamily: weight.extra,
    fontSize: 32,
    lineHeight: 36,
    color: Colors.white
  },
  text14: {
    fontFamily: weight.regular,
    fontSize: 16,
    lineHeight: 20,
    color: Colors.grey2
  },
  text16: {
    fontFamily: weight.regular,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.grey2
  },
  header: {
    level: {
      fontFamily: weight.bold,
      fontSize: 12,
      lineHeight: 16,
      color: Colors.white
    },
    points: {
      fontFamily: weight.bold,
      fontSize: 20,
      lineHeight: 32,
      color: Colors.white
    }
  }
}

export default Fonts
