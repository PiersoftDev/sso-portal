import { useState } from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import OTPInput from './OtpInput'
import OtpWrapper from './styles'
import { IoArrowBack } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import { storeAuthToken } from '../../shared/utils/authToken'

const otpLength = 6

const Otp = ({ mobileNumber, setMobileNumber }) => {
  const history = useHistory()
  const [otp, setOTP] = useState(Array(otpLength).fill(''))
  const [submitOtpIsLoading, setSubmitOtpIsLoading] = useState(false)

  const handleBack = () => {
    setOTP(Array(otpLength).fill(''))
    setMobileNumber('')
    console.log('handle back btn pressed')
  }

  const reSendOpt = async () => {
    setOTP(Array(otpLength).fill(''))
    console.log('resend otp method called')
  }
  const handleOtpSubmit = async () => {
    console.log('handle submit otp method called')
    console.log(otp)
    if (otp.filter((box) => box !== '').length == 6) {
      history.push('/')
      storeAuthToken('dummy1243')
    }
  }

  return (
    <OtpWrapper>
      <span className="back-btn" onClick={handleBack}>
        <IoArrowBack />
      </span>
      <div className="card-header">
        <span className="globe-icon">
          <BsGlobe2 />
        </span>

        <div className="title-container">
          <div className="header-title">Enter Code</div>
          <div className="header-subtitle">
            {` Please type the verification code sent to +91 ${mobileNumber}`}
          </div>
        </div>
      </div>
      <div className="card-body">
        <OTPInput numInputs={otpLength} otp={otp} setOTP={setOTP} />
        <button
          type="submit"
          className="btn login-btn"
          onClick={handleOtpSubmit}
          disabled={submitOtpIsLoading}
        >
          {submitOtpIsLoading ? 'Loading ...' : 'Submit'}
        </button>
      </div>
      <div className="card-footer">
        Didn't receive the code? <span onClick={reSendOpt}>Resend</span>
      </div>
    </OtpWrapper>
  )
}
export default Otp
