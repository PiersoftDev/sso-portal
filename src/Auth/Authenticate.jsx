import React, { useEffect, useState } from 'react'
import Login from './Login'
import Otp from './Otp'
import logo from './logo.png'
import AuthenticationWrapper from './styled'
import { useHistory } from 'react-router-dom'
import { getStoredAuthToken } from '../shared/utils/authToken'

const Authenticate = () => {
  const [mobileNumber, setMobileNumber] = useState('')

  const history = useHistory()

  useEffect(() => {
    const userAuth = async () => {
      // try {
      //   const { authToken } = await api.post('/authentication/guest')
      //   storeAuthToken(authToken)
      //   history.push('/')
      // } catch (error) {
      //   toast.error(error)
      // }

      console.log('getting user token')
      // history.push('/')
    }

    if (getStoredAuthToken()) {
      history.push('/')
    }
    console.log('history changed')
  }, [history])

  return (
    <AuthenticationWrapper>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#102143_40%,#3b82f6_100%)]"></div>
      <img src={logo} alt="Kmv logo" className="kmv-logo" />
      <div className="authenticate-card">
        {mobileNumber ? (
          <Otp mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} />
        ) : (
          <Login setMobileNumber={setMobileNumber} />
        )}
      </div>
    </AuthenticationWrapper>
  )
}

export default Authenticate
