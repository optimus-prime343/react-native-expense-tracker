import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { useCurrentTheme } from '../../store/use-theme-store'
import { darkTheme, lightTheme } from '../../utils/theme'
import StackNavigation from './stack-navigation'

const Navigation = () => {
  const currentTheme = useCurrentTheme()
  return (
    <NavigationContainer theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <StackNavigation />
    </NavigationContainer>
  )
}

export default Navigation
