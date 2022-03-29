import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Signin from './pages/userSide/Signin/signin'
import SignupUser from './pages/userSide/Signup/userSignup'
import SignupEmployee from './pages/employeeSide/Signup/employeeSignup'
import Welcome from './pages/userSide/Welcome Page/welcome'
import HomePage from './pages/userSide/HomePage/homePage'
import CuisineFood from './pages/userSide/CuisineFood/cuisineFood'
import BestSeller from './pages/userSide/BestSeller/bestSeller'
import Demo from './pages/userSide/demo/demo'

const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  return loginStatus == '1' ? <HomePage /> : <Welcome />
}
  function App() {
    return (
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signupUser" element={<SignupUser />} />
            <Route path="/signupEmployee" element={<SignupEmployee />} />
            <Route path="/homepage" element={<AuthorizeUser />} />
            <Route path="/foodItems" element={<CuisineFood />} />
            <Route path="/bestSeller" element={<BestSeller />} />
            <Route path="/demo" element={<Demo />} />

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
