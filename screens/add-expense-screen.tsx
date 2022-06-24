import { View, StyleSheet } from 'react-native'

import AddExpenseForm from '../components/expense/add-expense-form'
import { ScreenProps } from '../typings/navigation'

const AddExpenseScreen = ({ navigation }: ScreenProps<'AddExpense'>) => {
  return (
    <View style={styles.container}>
      <AddExpenseForm onAddExpense={() => navigation.navigate('Root')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})
export default AddExpenseScreen
