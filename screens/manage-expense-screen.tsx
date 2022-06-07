import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'

import { useExpenses } from '../store/use-expenses-store'
import { Expense } from '../typings/expense'
import { ScreenProps } from '../typings/navigation'

const ManageExpenseScreen = ({
  route,
  navigation
}: ScreenProps<'ManageExpense'>) => {
  const expenses = useExpenses()
  const { expenseId } = route.params
  const expense = expenses.find(expense => expense.id === expenseId) as Expense

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Manage ${expense.name}`
    })
  })
  return (
    <View>
      <Text>ManageExpenseScreen</Text>
    </View>
  )
}

export default ManageExpenseScreen
