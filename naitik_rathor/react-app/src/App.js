import SignupEmployee from './pages/employeeSide/Signup/signup'
import Home from './pages/userSide/Home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signin from './pages/userSide/Signin/signin'
import SignupUser from './pages/userSide/Signup/signup'

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
            <Route path="/signup-user" element={<SignupUser />} />
            <Route path="/signup-employee" element={<SignupEmployee />} />
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
