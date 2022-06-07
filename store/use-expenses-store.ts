import create from 'zustand'

import { Expense } from '../typings/expense'

const DUMMY_EXPENSES: Expense[] = Array.from({ length: 28 })
  .map((_, index) => index + 1)
  .map(index => ({
    id: `e-${index}`,
    name: `Expense ${index}`,
    amount: Math.floor(Math.random() * 5000),
    date: new Date(
      `2021-12-${index > 10 ? index : `0${index}`}`
    ).toLocaleDateString()
  }))

type ExpensesStore = {
  expenses: Expense[]
  addExpense: (expense: Expense) => void
  deleteExpense: (id: string) => void
  editExpense: (id: string, expense: Partial<Expense>) => void
}
const useExpensesStore = create<ExpensesStore>(set => ({
  expenses: DUMMY_EXPENSES,
  addExpense: expense =>
    set(state => ({ ...state, expenses: [expense, ...state.expenses] })),
  deleteExpense: id =>
    set(state => ({
      ...state,
      expenses: state.expenses.filter(expense => expense.id !== id)
    })),
  editExpense: (id, updateInput) =>
    set(state => ({
      ...state,
      expenses: state.expenses.map(expense =>
        expense.id === id ? { ...expense, ...updateInput } : expense
      )
    }))
}))
export const useRecentExpenses = () =>
  useExpensesStore(store =>
    store.expenses
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 7)
  )
export const useExpenses = () => useExpensesStore(store => store.expenses)
export const useAddExpense = () => useExpensesStore(store => store.addExpense)
export const useDeleteExpense = () => useExpensesStore(store => store.deleteExpense)
export const useEditExpense = () => useExpensesStore(store => store.editExpense)
