import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import logo from '../../assets/logo.png'
import "./header1.css"

const Header1 = () => {

    const { firstName } = sessionStorage
    console.log(firstName)

    const navigate = useNavigate()

    const logoutUser = () => {
        sessionStorage['userId'] = null
        sessionStorage['firstName'] = null
        sessionStorage['lastName'] = null

        navigate('/')
        toast.success("Logout Success")
    }
    return <div>
        <nav id="navbar-example2" className="navbar fixed-top navbar-expand-lg navbar-light bg-dark navbar2">
            <div className="container-fluid navbar-items">
                <label className="navbar-brand  mb-0 h1" href="/"><img src={logo} className="eologo" /></label>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <a className="nav-link " href="/homepage">HOME</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/bestsellers">BEST SELLER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/offers">OFFERS</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {firstName}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a class="dropdown-item" href="/profile">Profile</a></li>
                                <li><a class="dropdown-item" href="#" onClick={logoutUser}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default Header1