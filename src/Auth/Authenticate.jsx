import React, { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const Authenticate = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="authenticate-container  ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#102143_40%,#3b82f6_100%)]"></div>
      <div className="authenticate-card">
        <div className="card-header">
          <span className="globe-icon">
            <BsGlobe2 />
          </span>

          <div className="title-container">
            <div className="header-title">Welcome back</div>
            <div className="header-subtitle">
              Please enter your details to sign in
            </div>
          </div>
        </div>

        <div className="hr"></div>

        <div className="card-body">
          <div className="field-container">
            <div className="input-label">Email address</div>
            <div className="input-container">
              <input
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field-container">
            <div className="input-label">Password</div>
            <div className="input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
          </div>
          <div className="forgot-password">Forgot password?</div>

          <div className="hr"></div>

          <button className="sign-in-btn">Sign in</button>
        </div>

        <div className="card-footer">
          Don't have an account? <span>Create account</span>
        </div>
      </div>
    </div>
  )
}

export default Authenticate
