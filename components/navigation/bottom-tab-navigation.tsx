import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import AllExpensesScreen from '../../screens/all-expenses-screen'
import RecentExpensesScreen from '../../screens/recent-expenses-screen'
import { BottomTabNavigationParamList } from '../../typings/navigation'
import ToggleThemeIcon from '../toggle-theme-icon'

const BottomTabNavigator = createBottomTabNavigator<BottomTabNavigationParamList>()

const BottomTabNavigation = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ headerRight: () => <ToggleThemeIcon /> }}
    >
      <BottomTabNavigator.Screen
        name='Recent'
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent Expenses',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='time-outline' size={size} color={color} />
          )
        }}
      />
      <BottomTabNavigator.Screen
        name='All'
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='apps-outline' size={size} color={color} />
          )
        }}
      />
    </BottomTabNavigator.Navigator>
  )
}

export default BottomTabNavigation
