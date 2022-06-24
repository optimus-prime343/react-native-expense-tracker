import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { TextInputProps, TextInput, StyleSheet } from 'react-native'

interface Props extends TextInputProps {
  mb?: number
  mt?: number
  ml?: number
  mr?: number
  mx?: number
  my?: number
  m?: number
}

const CustomTextInput = ({ style, ...rest }: Props) => {
  const { mb, mt, ml, mr, mx, my, m } = rest
  const { colors } = useTheme()
  const [focused, setFocused] = useState(false)
  return (
    <TextInput
      {...rest}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={[
        styles.input,
        {
          color: colors.text,
          backgroundColor: colors.background,
          borderColor: focused ? colors.border : colors.primary,
          marginBottom: mb ?? m ?? 0,
          marginTop: mt ?? my ?? m ?? 0,
          marginLeft: ml ?? mx ?? m ?? 0,
          marginRight: mr ?? mx ?? m ?? 0
        }
      ]}
    />
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4
  }
})
export default CustomTextInput
