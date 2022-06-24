import React, { useState } from 'react'
import { View, Alert, Keyboard } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { useEditExpense } from '../../store/use-expenses-store'
import { Expense } from '../../typings/expense'
import CustomButton from '../ui/custom-button'
import CustomTextInput from '../ui/custom-text-input'

interface Props {
  expense: Expense
  onSave: () => void
}
const EditExpenseForm = ({ expense, onSave }: Props) => {
  const toast = useToast()
  const editExpense = useEditExpense()

  const [name, setName] = useState(expense.name)
  const [amount, setAmount] = useState(expense.amount)

  const handleAmountChange = (amount: string) => {
    const parsedAmount = parseFloat(amount)
    if (isNaN(parsedAmount)) {
      return Alert.alert('Invalid amount', 'Please enter a valid amount')
    }
    setAmount(parsedAmount)
  }
  const handleSave = () => {
    editExpense(expense.id, { name, amount })
    Keyboard.dismiss()
    toast.show('Expense updated', { type: 'success' })
    onSave()
  }
  return (
    <View>
      <CustomTextInput
        value={name}
        placeholder='Enter title'
        onChangeText={setName}
        mb={12}
      />
      <CustomTextInput
        keyboardType='number-pad'
        value={amount.toString()}
        placeholder='Enter amount'
        mb={12}
        onChangeText={handleAmountChange}
      />
      <CustomButton title='Save' onPress={handleSave} />
    </View>
  )
}
export default EditExpenseForm
