import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { Expense } from '../../typings/expense'
import ExpenseList from './expense-list'
import ExpenseSpendingSummary from './expense-spending-summary'

type Props = {
  spendingPeriod: string
  expenses: Expense[]
}
const ExpensesOutput = ({ expenses, spendingPeriod }: Props) => {
  const totalAmountSpent = useMemo(
    () => expenses.reduce((acc, curr) => acc + curr.amount, 0),
    [expenses]
  )
  return (
    <View style={styles.container}>
      <ExpenseSpendingSummary
        spendingPeriod={spendingPeriod}
        totalAmountSpent={totalAmountSpent}
      />
      <ExpenseList expenses={expenses} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 12
  }
})
export default ExpensesOutput
