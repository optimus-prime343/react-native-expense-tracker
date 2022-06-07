import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type Props = {
  spendingPeriod?: string
  totalAmountSpent: number
}
const ExpenseSpendingSummary = ({ spendingPeriod, totalAmountSpent }: Props) => {
  const { colors } = useTheme()
  return (
    <View style={[style.container, { backgroundColor: colors.primary }]}>
      <Text>{spendingPeriod ?? 'Total spent : '}</Text>
      <Text>{`$${totalAmountSpent}`}</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    marginBottom: 12,
    padding: 12,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
export default ExpenseSpendingSummary
