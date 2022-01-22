import UserSignup from './pages/User Side/Signup/signup'
import Signin from './pages/User Side/Signin/signin'
import Home from './pages/User Side/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  return loginStatus == '1' ? <Home /> : <Signin />
}
  function App() {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthorizeUser />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/usersignup" element={<UserSignup />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer theme="colored" />
      </div>
    )
  }

  export default App
