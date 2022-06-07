import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

const colors: Theme['colors'] = {
  primary: '#e54b4b'
} as Theme['colors']

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors
  }
}
export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...colors
  }
}
