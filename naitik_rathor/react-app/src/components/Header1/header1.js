import logo from '../../assets/logo.png'
import "./header1.css"

const Header1 = () => {
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
                            <a className="nav-link " href="#scrollspyHeading1">HOME</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#scrollspyHeading2">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading2">CONTACT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link franchise" >FRANCHISE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/signupUser">SIGNUP</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-primary" to="./signin" >Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default Header1