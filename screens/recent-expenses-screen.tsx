import React from 'react'
import { View } from 'react-native'

import ExpensesOutput from '../components/expense/expenses-output'
import { useRecentExpenses } from '../store/use-expenses-store'

const RecentExpensesScreen = () => {
  const recentExpenses = useRecentExpenses()
  return (
    <View>
      <ExpensesOutput spendingPeriod='Recent Expenses' expenses={recentExpenses} />
    </View>
  )
}

export default RecentExpensesScreen
