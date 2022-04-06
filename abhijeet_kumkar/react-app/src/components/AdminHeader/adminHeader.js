import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../assets/logo.png'
import "./adminHeader.css"

const AdminHeader = () => {

    const { firstName } = sessionStorage
    // console.log(firstName)

    const navigate = useNavigate()

    const logoutUser = () => {
        sessionStorage['userId'] = null
        sessionStorage['roleId'] = null
        sessionStorage['firstName'] = null
        sessionStorage['lastName'] = null
        sessionStorage['loginStatus'] = null

        navigate('/')
        toast.success("Logout Success")
    }
    return <div>
        <nav id="navbar-example2" className="navbar fixed-top navbar-expand-lg  navbar2">
            <div className="container-fluid navbar-items">
                <label className="navbar-brand  mb-0 h1" href="/"><img src={logo} className="eologo" /><span className="oasis">Emerald Oasis</span></label>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo2">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                            <Link className="nav-link items" to="/homepage">HOME</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link items" to="/employees">EMPLOYEES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link items" to="/customers">CUSTOMERS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link items" to="/cuisinesAll">CUISINES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link items" to="/allOrders">ORDERS</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle items" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <label className="items">{firstName}</label>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark items" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="/profile">PROFILE</a></li>
                                <li><a className="dropdown-item" href="#" onClick={logoutUser}>LOGOUT</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default AdminHeader