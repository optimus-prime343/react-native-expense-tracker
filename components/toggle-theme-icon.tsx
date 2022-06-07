import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'

import { useCurrentTheme, useToggleTheme } from '../store/use-theme-store'

const ToggleThemeIcon = () => {
  const theme = useTheme()
  const currentTheme = useCurrentTheme()
  const toggleTheme = useToggleTheme()
  return (
    <Pressable onPress={toggleTheme}>
      <Ionicons
        size={25}
        name={currentTheme === 'dark' ? 'sunny-outline' : 'contrast-outline'}
        color={theme.colors.text}
      />
    </Pressable>
  )
}

export default ToggleThemeIcon
