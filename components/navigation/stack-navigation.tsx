import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import AddExpenseScreen from '../../screens/add-expense-screen'
import ManageExpenseScreen from '../../screens/manage-expense-screen'
import { RootStackParamList } from '../../typings/navigation'
import HeaderRightActions from '../header-right-icons'
import BottomTabNavigation from './bottom-tab-navigation'

const StackNavigator = createNativeStackNavigator<RootStackParamList>()

const StackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName='Root'>
      <StackNavigator.Screen
        name='Root'
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name='ManageExpense'
        component={ManageExpenseScreen}
        options={{
          headerRight: () => <HeaderRightActions />
        }}
      />
      <StackNavigator.Screen name='AddExpense' component={AddExpenseScreen} />
    </StackNavigator.Navigator>
  )
}

export default StackNavigation
