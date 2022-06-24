export const isValidAmount = (amount: string, min: number = 0): boolean => {
  const amountInNumber = parseFloat(amount)
  if (isNaN(amountInNumber)) return false
  if (min !== undefined && amountInNumber < min) return false
  return true
}
