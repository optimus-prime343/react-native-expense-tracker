import { useTheme } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { Text, Pressable, StyleSheet, PressableProps } from 'react-native'

interface Props extends PressableProps {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  color?: string
  title: string
}

const CustomButton = ({
  leftIcon,
  rightIcon,
  title,
  color,
  style,
  ...rest
}: Props) => {
  const { colors } = useTheme()
  return (
    <Pressable
      {...rest}
      android_ripple={{ color: colors.card }}
      style={[
        styles.container,
        { ...style, backgroundColor: color ?? colors.primary }
      ]}
    >
      {leftIcon ? <>{leftIcon}</> : null}
      <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
      {rightIcon ? <>{rightIcon}</> : null}
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    borderRadius: 2
  },
  text: {
    fontSize: 16,
    marginHorizontal: 8
  }
})

export default CustomButton
