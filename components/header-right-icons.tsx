import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet } from 'react-native'

import { RootStackParamList } from '../typings/navigation'
import ToggleThemeIcon from './toggle-theme-icon'

const HeaderRightIcons = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>()
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => navigate('AddExpense')}
        name='add-circle'
        color={colors.text}
        size={25}
        style={{ marginRight: 12 }}
      />
      <ToggleThemeIcon />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
export default HeaderRightIcons
