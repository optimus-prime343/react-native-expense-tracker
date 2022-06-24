import React, { useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import DeleteExpense from '../components/expense/delete-expense'
import EditExpenseForm from '../components/expense/edit-expense-form'
import { useExpenses } from '../store/use-expenses-store'
import { ScreenProps } from '../typings/navigation'

const ManageExpenseScreen = ({
  route,
  navigation
}: ScreenProps<'ManageExpense'>) => {
  const expenses = useExpenses()
  const { expenseId } = route.params
  const expense = expenses.find(expense => expense.id === expenseId)

  const gotoRoot = () => navigation.navigate('Root')
  useLayoutEffect(() => {
    if (expense === undefined) return
    navigation.setOptions({
      title: `Manage ${expense.name}`
    })
  })
  if (expense === undefined) return null
  return (
    <View style={styles.container}>
      <EditExpenseForm expense={expense} onSave={gotoRoot} />
      <DeleteExpense id={expense.id} title={expense.name} onDelete={gotoRoot} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})
export default ManageExpenseScreen
