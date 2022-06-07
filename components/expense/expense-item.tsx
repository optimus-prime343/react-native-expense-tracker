import { NavigationProp, useNavigation, useTheme } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import { Expense } from '../../typings/expense'
import { RootStackParamList } from '../../typings/navigation'

type Props = {
  expense: Expense
}
const ExpenseItem = ({ expense }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const { colors } = useTheme()

  const handlePress = async () => {
    navigation.navigate('ManageExpense', { expenseId: expense.id })
  }
  return (
    <Pressable
      onPress={handlePress}
      style={[style.expenseItem, { backgroundColor: colors.card }]}
    >
      <View style={style.expenseHeader}>
        <Text style={{ color: colors.text, flex: 1 }}>{expense.name}</Text>
        <Text style={[style.amount, { backgroundColor: colors.primary }]}>
          {`$${expense.amount}`}
        </Text>
      </View>
    </Pressable>
  )
}
const style = StyleSheet.create({
  expenseItem: {
    padding: 12,
    borderRadius: 4,
    marginBottom: 12
  },
  expenseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  amount: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4
  }
})
export default ExpenseItem
