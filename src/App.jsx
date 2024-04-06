import { useState } from 'react'
import SignuPage from './components/signupage'
import Successcard from './components/successCard'
import './App.css'

function App() {

  const [signupVisible, setsignupVisible] = useState(true)
  const [successVisible, setsuccessVisible] = useState(false)

  const handleSignup = () => {
    setsignupVisible(false)
    setsuccessVisible(true)
  }
  const handleSuccess = () => {
    setsignupVisible(true)
    setsuccessVisible(false)
  }

  return (
    <>
    {signupVisible && <SignuPage onSignup={handleSignup}/>}
    {successVisible && <Successcard onDismiss={handleSuccess}/>}
    </>
  )
}

export default App
