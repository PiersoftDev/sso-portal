import { useState } from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import OTPInput from './OtpInput'
import OtpWrapper from './styles'
import { IoArrowBack } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import { storeAuthToken } from '../../shared/utils/authToken'
import { toast } from 'react-toastify'
import Axios from 'axios'
import { otpToString } from '../../shared/utils/otp'

const otpLength = 6

const Otp = ({
  mobileNumber,
  setMobileNumber,
  sessionToken,
  setSessionToken,
}) => {
  const history = useHistory()
  const [otp, setOTP] = useState(Array(otpLength).fill(''))
  const [submitOtpIsLoading, setSubmitOtpIsLoading] = useState(false)

  const handleBack = () => {
    setOTP(Array(otpLength).fill(''))
    setMobileNumber('')
    setSessionToken('')
    console.log('handle back btn pressed')
  }

  const verifyUser = async (reqBody) => {
    try {
      const resp = await Axios.post(
        'https://user.p360.build/v1/user/verify',
        reqBody
      )
      const { accessToken, refreshToken, idToken } = resp.data
      storeAuthToken('accessToken', accessToken)
      storeAuthToken('refreshToken', refreshToken)
      storeAuthToken('idToken', idToken)
      history.push('/')
    } catch (error) {
      console.log(error)
      toast.error('some error occured while verifying user')
    }
  }

  const reSendOtp = async () => {
    try {
      const resp = await Axios.post(
        `https://user.p360.build/v1/user/login/+91${mobileNumber}`
      )
      setSessionToken(resp.data.data)
      setOTP(Array(otpLength).fill(''))
      toast.success('Otp sent successully again')
    } catch (error) {
      console.log(error)
      toast.error(
        'some error occured while trying to login with the user phone number '
      )
    }
  }
  const handleOtpSubmit = async () => {
    console.log('handle submit otp method called')

    if (otp.filter((box) => box !== '').length != 6) {
      toast.error('please enter all the 6 digits in otp')
      return
    }

    // history.push('/')
    // storeAuthToken('dummy1243')

    const reqbody = {
      session: sessionToken,
      username: `+91${mobileNumber}`,
      confirmationCode: otp.join(''),
    }
    console.log(reqbody)
    otpToString(otp)

    await verifyUser(reqbody)
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
        Didn't receive the code? <span onClick={reSendOtp}>Resend</span>
      </div>
    </OtpWrapper>
  )
}
export default Otp
