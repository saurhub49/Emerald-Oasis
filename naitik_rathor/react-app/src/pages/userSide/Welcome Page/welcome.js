import { Link } from "react-router-dom"
import logo from '../../../assets/logo.png'
import './welcome.css'
import help from '../../../assets/help-circle.png'
import mail from '../../../assets/mail.png'
import faq from '../../../assets/faq.png'
import call from '../../../assets/call.png'
import WelcomeCarousel from "../../../components/WelcomeCarousel/welcomeCarousel"
import SigninModal from "../../../components/SigninModal/signinModal"
import SignupModal from "../../../components/SignupModal/signupModal"

const Welcome = () => {

    return (
        <div >
            <WelcomeCarousel></WelcomeCarousel>
            <nav id="navbar-example2" className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid navbar-items">
                    <a href="/"> <label className="navbar-brand  mb-0 h1">
                        <img src={logo} className="eologo" />
                        <span className="oasis1">Emerald Oasis</span>
                    </label></a>
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
                                <a className="nav-link" href="#scrollspyHeading3">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signupUser" data-bs-toggle="modal" data-bs-target="#modalBackdrop">SIGNUP</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">LOGIN</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="modal fade" id="staticBackdrop" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true" tabindex="-1" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <SigninModal></SigninModal>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modalBackdrop" data-bs-keyboard="false" aria-labelledby="modalBackdropLabel" aria-hidden="true" tabindex="-1" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <SignupModal></SignupModal>
                        </div>
                    </div>
                </div>
            </div>

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
                            HOW IT&nbsp;<div className="works">WORKS</div>
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
                                Contact&nbsp;<span className="works">US</span>
                            </div>
                            <img className="contact-icon" src={mail} data-bs-toggle="collapse" href="#mail-body" aria-expanded="false"></img>
                            <img className="contact-icon" src={call} data-bs-toggle="collapse" href="#call-body" aria-expanded="false"></img>
                            <img className="contact-icon" src={faq} data-bs-toggle="collapse" href="#faq-body" aria-expanded="false"></img>
                            <div class="collapse" id="mail-body">
                                <div class="card card-body" >
                                    Thanks For Visiting Us...
                                    <br />
                                    Email: emeral_oasis@gmail.com
                                </div>
                            </div>
                            <div class="collapse" id="call-body">
                                <div class="card card-body" >
                                    Thanks For Visiting Us...
                                    <br />
                                    Contact us: 999999xxx
                                </div>
                            </div>
                            <div class="collapse" id="faq-body">
                                <div class="card card-body" >
                                    Thanks For Visiting Us...
                                    <br />
                                    Help: write your query here...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="emp-link">
                <div class="fixed-bottom employee-icon container employee-icon-box">
                    Interested in being a delivery person?
                    <a href="/signupEmployee"><img className="deliv" src={help} alt="Hiring Icon" /> </a>
                </div>
            </div>
        </div>
    )
}
export default Welcome