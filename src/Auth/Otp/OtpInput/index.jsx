import { useRef } from 'react'
import OtpInputWrapper from './styles'

const OTPInput = ({ numInputs, otp, setOTP }) => {
  const inputRefs = useRef([])

  const handleChange = (e, index) => {
    const value = e.target.value
    if (isNaN(value)) return // Only allow numeric input
    const newOTP = [...otp]
    newOTP[index] = value
    setOTP(newOTP)

    if (value !== '') {
      // Move focus to the next input
      if (index < numInputs - 1) {
        inputRefs.current[index + 1].focus()
      } else {
        // All inputs are filled
        // onComplete(newOTP.join(''))
      }
    } else {
      // Move focus to the previous input if current input is cleared
      if (index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData
      .getData('text/plain')
      .slice(0, numInputs)
      .split('')

    const newOTP = [...otp]
    pastedData.forEach((value, index) => {
      newOTP[index] = value
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = value
      }
    })
    setOTP(newOTP)

    e.target.blur()

    if (newOTP[numInputs - 1] !== '') {
      //   onComplete(newOTP.join(''))
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      // Move focus to the previous input on backspace press if current input is empty
      if (index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const handleFocus = (e) => {
    e.target.select()
  }

  const handleInputRef = (ref, index) => {
    inputRefs.current[index] = ref
  }

  const inputs = [...Array(numInputs)].map((_, index) => (
    <input
      key={index}
      onPaste={handlePaste}
      type="text"
      maxLength="1"
      value={otp[index]}
      onChange={(e) => handleChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      onFocus={handleFocus}
      ref={(ref) => handleInputRef(ref, index)}
    />
  ))

  return <OtpInputWrapper>{inputs}</OtpInputWrapper>
}
export default OTPInput
