import React from 'react'
import { Alert } from 'react-native'
import { useToast } from 'react-native-toast-notifications'

import { useDeleteExpense } from '../../store/use-expenses-store'
import CustomButton from '../ui/custom-button'

interface Props {
  id: string
  title: string
  onDelete: () => void
}
const DeleteExpense = ({ id, title, onDelete }: Props) => {
  const toast = useToast()
  const deleteExpense = useDeleteExpense()

  const handleExpenseDelete = () => {
    deleteExpense(id)
    toast.show(`${title} deleted`, { type: 'success' })
    onDelete()
  }
  const confirmExpenseDelete = () => {
    Alert.alert('Delete Expense', `Are you sure you want to delete ${title}?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: handleExpenseDelete }
    ])
  }
  return (
    <CustomButton
      style={{ marginTop: 10 }}
      color='red'
      title='Delete'
      onPress={confirmExpenseDelete}
    />
  )
}

export default DeleteExpense
