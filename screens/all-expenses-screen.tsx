import React from 'react'
import { View } from 'react-native'

import ExpensesOutput from '../components/expense/expenses-output'
import { useExpenses } from '../store/use-expenses-store'

const AllExpensesScreen = () => {
  const expenses = useExpenses()
  return (
    <View>
      <ExpensesOutput spendingPeriod='All Expenses' expenses={expenses} />
    </View>
  )
}

export default AllExpensesScreen
