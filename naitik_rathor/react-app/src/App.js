import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signin from './pages/userSide/Signin/signin'
import SignupUser from './pages/userSide/Signup/userSignup'
import SignupEmployee from './pages/employeeSide/Signup/employeeSignup'
import Welcome from './pages/userSide/Welcome Page/welcome'

// const AuthorizeUser = () => {
//   const loginStatus = sessionStorage['loginStatus']
//   return loginStatus == '1' ? <Home /> : <Signin />
// }
  function App() {
    return (
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signupUser" element={<SignupUser />} />
            <Route path="/signupEmployee" element={<SignupEmployee />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer theme="colored" 
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover/>
      </div>
    )
  }

  export default App
