import { Dimensions } from 'react-native'

export const gutter = 20
export const margin = 24
export const columns = 4
export const { width, height } = Dimensions.get('window')

export const column = (width - (gutter * (columns - 1)) - (margin * 2)) / columns
