import { type TextStyle } from 'react-native'
import Colors from './Colors'

interface FontsType {
  title: TextStyle
  text16: TextStyle
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
  text16: {
    fontFamily: weight.regular,
    fontSize: 16,
    lineHeight: 24,
    color: Colors.grey2
  }
}

export default Fonts
