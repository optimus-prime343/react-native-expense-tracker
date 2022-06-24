import React from 'react'
import { FlatList } from 'react-native'

import { Expense } from '../../typings/expense'
import ExpenseItem from './expense-item'

type Props = {
  expenses: Expense[]
}
const ExpenseList = ({ expenses }: Props) => {
  return (
    <FlatList
      data={expenses}
      renderItem={({ item: expense }) => <ExpenseItem expense={expense} />}
      keyExtractor={item => item.id}
    />
  )
}

export default ExpenseList
