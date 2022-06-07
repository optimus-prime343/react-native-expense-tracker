import { ColorSchemeName } from 'react-native'
import create from 'zustand'

export type ThemeStore = {
  theme: ColorSchemeName
  toggleTheme: () => void
}
const useThemeStore = create<ThemeStore>(set => ({
  theme: 'dark',
  toggleTheme: () =>
    set(state => ({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }))
}))

export const useCurrentTheme = () => useThemeStore(store => store.theme)
export const useToggleTheme = () => useThemeStore(store => store.toggleTheme)
