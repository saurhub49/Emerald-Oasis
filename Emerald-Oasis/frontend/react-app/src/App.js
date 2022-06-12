import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Welcome from './pages/userSide/Welcome Page/welcome'
import HomePage from './pages/userSide/HomePage/homePage'
import CuisineFood from './pages/userSide/CuisineFood/cuisineFood'
import AdminHome from './pages/adminSide/HomePage/adminHome'
import EmployeeHome from './pages/employeeSide/HomePage/employeeHome'
import Customers from './pages/adminSide/ManageCust/Customers/customers'
import EmpDetails from './pages/adminSide/ManageEmp/EmpDetaills/empDetails'
import Employees from './pages/adminSide/ManageEmp/Employees/employees'
import Cart from './pages/userSide/Cart/cart'
import CustDetails from './pages/adminSide/ManageCust/CustDetails/custDetails'
import CuisinesAll from './pages/adminSide/ManageCuis/Cuisines/cuisinesAll'
import AddCuisine from './pages/adminSide/ManageCuis/AddCuisine/addCuisine'
import AllOrders from './pages/adminSide/ManageOrders/AllOrders/allOrders'
import EmpAllOrders from './pages/adminSide/ManageEmp/EmpOrders/empAllOrders'
import AllFoods from './pages/adminSide/ManageCuis/AllFoods/allFoods'
import AddFood from './pages/adminSide/ManageCuis/AddFood/addFood'
import UserAllOrders from './pages/adminSide/ManageCust/UserAllOrders/userAllOrders'
import UserOrderDetails from './pages/adminSide/ManageCust/UserOrderDetails/userOrderDetails'
import EditCuisine from './pages/adminSide/ManageCuis/EditCuisine/editCuisine'
import EditFood from './pages/adminSide/ManageCuis/EditFood/editFood'
import SignupEmployee from './pages/employeeSide/Signup/employeeSignup'
import CustomerProfile from './pages/userSide/CustomerProfile/customerProfile'
import EmployeeProfile from './pages/employeeSide/EmployeeProfile/employeeProfile'
import ChangePassword from './pages/userSide/ChangePassword/changePassword'
import MyOrders from './pages/userSide/MyOrders/MyOrders'
import FAQ from './components/FAQs/faq'
import EmployeeOrderHistory from './pages/employeeSide/EmpOrderHistory/orderHistory'

const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  const roleId = sessionStorage['roleId']
  return loginStatus === '1' ? roleId === '1' ? <AdminHome /> : roleId === '2' ? <EmployeeHome /> : <HomePage /> : <Welcome />

}

// console.log(sessionStorage)

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<AuthorizeUser />} />
          <Route path="/signupEmployee" element={<SignupEmployee />} />
          <Route path="/foodItems" element={<CuisineFood />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/empDetails" element={<EmpDetails />} />
          <Route path="/custDetails" element={<CustDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cuisinesAll" element={<CuisinesAll />} />
          <Route path="/addCuisine" element={<AddCuisine />} />
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/empAllOrder" element={<EmpAllOrders />} />
          <Route path="/allFoods" element={<AllFoods />} />
          <Route path="/addFood" element={<AddFood />} />
          <Route path="/userAllOrders" element={<UserAllOrders />} />
          <Route path="/userOrderDetails" element={<UserOrderDetails />} />
          <Route path="/editCuisine" element={<EditCuisine />} />
          <Route path="/editFood" element={<EditFood />} />
          <Route path="/user/profile" element={<CustomerProfile />} />
          <Route path="/employee/profile" element={<EmployeeProfile />} />
          <Route path="/user/changepassword" element={<ChangePassword />} />
          <Route path="/user/myorders" element={<MyOrders />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/employee/order/history" element={<EmployeeOrderHistory />} />
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
        pauseOnHover />
    </div >
  )
}

export default App
