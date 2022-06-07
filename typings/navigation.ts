import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type BottomTabNavigationParamList = {
  Recent: undefined
  All: undefined
}
export type RootStackParamList = {
  Root: undefined
  ManageExpense: { expenseId: string }
}

export type ScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>
export type CombinedScreenProps<T extends keyof BottomTabNavigationParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabNavigationParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >
