export const maskPhoneNumber = phoneNumber => {
  // Convert to string if input is a number
  const phoneStr =
    typeof phoneNumber === 'number' ? phoneNumber.toString() : phoneNumber

  // Validate the input
  if (!phoneStr || typeof phoneStr !== 'string' || phoneStr.length < 4) {
    throw new Error('Invalid phone number')
  }

  // Mask the phone number
  const visibleStart = phoneStr.slice(0, 2)
  const visibleEnd = phoneStr.slice(-2)
  const maskedMiddle = '*'.repeat(phoneStr.length - 4)

  return `${visibleStart}${maskedMiddle}${visibleEnd}`
}
