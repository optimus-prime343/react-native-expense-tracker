import { useState } from 'react'
import { Alert, View } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { useAddExpense } from '../../store/use-expenses-store'
import { isValidAmount } from '../../utilities/validate-amount'
import CustomButton from '../ui/custom-button'
import CustomTextInput from '../ui/custom-text-input'

interface Props {
  onAddExpense: () => void
}
const AddExpenseForm = ({ onAddExpense }: Props) => {
  const toast = useToast()
  const addExpense = useAddExpense()
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)

  const handleAmountChange = (amount: string) => {
    if (!isValidAmount(amount)) {
      return Alert.alert('Invalid Amount', 'Please enter a valid amount')
    }
    setAmount(Number(amount))
  }
  const handleExpenseAdd = () => {
    addExpense({
      id: new Date().getTime().toString(),
      date: new Date().toString(),
      name,
      amount
    })
    toast.show('New expense added')
    onAddExpense()
  }
  return (
    <View>
      <CustomTextInput value={name} onChangeText={setName} />
      <CustomTextInput
        keyboardType='number-pad'
        value={amount.toString()}
        onChangeText={handleAmountChange}
      />
      <CustomButton title='Add Expense' onPress={handleExpenseAdd} />
    </View>
  )
}

export default AddExpenseForm
