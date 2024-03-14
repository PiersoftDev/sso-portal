import React, { Fragment } from 'react'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './normalize.css'
import './global.css'

const App = () => (
  <Fragment>
    <ToastContainer position="top-center" />
    <Routes />
  </Fragment>
)

export default App
