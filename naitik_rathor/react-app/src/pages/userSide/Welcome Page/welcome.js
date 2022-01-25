import { Link } from "react-router-dom"
import logo from '../../../assets/logo.png'
import './welcome.css'

const Welcome = () => {

    return (
        <div >
            <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand  mb-0 h1" href="#"><img src={logo} className="eologo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo2">
                        <ul  className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="#scrollspyHeading1">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading2">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading2">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary" >Franchise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signupUser">Signup</a>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-primary" to="./signin" >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <p>This is a image section</p>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <h4 id="scrollspyHeading1">Home Content</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading2">About Content</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading3">Contact Us</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            </div>
            <p></p>
        </div>
    )
}
export default Welcome