import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native'

const PRIMARY_COLOR = '#A149FA'

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY_COLOR
  }
}
export const darkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: PRIMARY_COLOR
  }
}
