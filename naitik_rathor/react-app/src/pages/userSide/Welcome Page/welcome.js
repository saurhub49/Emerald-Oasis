import { Link } from "react-router-dom"
import logo from '../../../assets/logo.png'
import './welcome.css'
import help from '../../../assets/help-circle.png'

const Welcome = () => {

    return (
        <div >

            <nav id="navbar-example2" className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
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
                                <Link className="nav-link" to="/signupUser">SIGNUP</Link>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-primary" href="./signin" >Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                <div id="scrollspyHeading1" className="img-home">
                    <div className="container">
                        <div className="welcome-tag-line ">
                            India's 1st resort where you negotiate price for the food
                        </div>
                    </div>
                </div>


                <div id="scrollspyHeading2" className="img-about">
                    <div className="container">
                        <div className="how-it-works-1">
                            HOW IT WORKS
                        </div>
                        <div className="how-it-works-2 ">
                            A theme bar where customers can interact with a virtual bartender
                        </div>
                        <div className="how-it-works-3 ">
                            Customers use an app to negotiate for their drinks at their own choice of prices with Agent Jack, the virtual bartender. Jack may agree or disagree with the customers and each offer that is rejected by Agent Jack is followed by a witty yet humorous reply that challenges customers to try again. The interaction between Jack and the customer is publicly displayed on a large projector screen, bringing a mix of humour & interactivity in addition to great deals for the customers.
                        </div>
                    </div>
                    <div id="scrollspyHeading3" className="img-contactUs">
                        <div className="container">
                            <div className="contactUs">
                                Contact US
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="emp-link">
                <div class="fixed-bottom employee-icon container employee-icon-box">
                    Interested in being a delivery person?
                    <a href="/signupEmployee"><img src={help} alt="Hiring Icon" /> </a>
                </div>
            </div>
        </div>
    )
}
export default Welcome