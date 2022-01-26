import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../../config'
import './employeeSignup.css'
import employeeImg from '../../../images/deliverybg.png'
import logo from '../../../assets/logo.png'


const SignupEmployee = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const signupEmployee = () => {
        if (firstName.length == 0) {
            toast.warning('Enter First Name')
        }
        else if (lastName.length == 0) {
            toast.warning('Enter Last Name')
        }
        else if (email.length == 0) {
            toast.warning('Enter Email')
        }
        else if (phoneNo.length == 0) {
            toast.warning('Enter Phone number')
        }
        else if (password.length == 0) {
            toast.warning('Enter Password')
        }
        else if (confirmPassword.length == 0) {
            toast.warning('Confirm Password')
        }
        else if (password != confirmPassword) {
            toast.error('Passwords do not match')
        }
        else {
            const body = {
                firstName,
                lastName,
                email,
                password,
                phoneNo
            }

            const url = `${URL}/employee/signup`

            axios.post(url, body).then((response) => {
                const result = response.data

                console.log(result)

                if (result['status'] === 'success') {
                    toast.success('signup success')
                    navigate('/signin')
                }
                else {
                    toast.error(result['error'])
                }
            })
        }
    }

    return (
        <div className="signupemployee">
            <nav id="navbar-example2" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid navbar-items">
                    <a className="navbar-brand  mb-0 h1" href="/"><img src={logo} className="eologo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="/">HOME</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="empdiv">
                            <img src={employeeImg} className="picture1" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="empdiv">
                            <div className="form formmargin">
                                <div className="row">
                                    <h1 className="textheader">Sign up</h1>
                                </div>
                                <hr />


                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3"></div>
                                        <div>
                                            <label htmlFor="" className="label-control textbody">First Name</label>
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                onChange={(e) => {
                                                    setFirstName(e.target.value)
                                                }}
                                                type="text" class="form-control inputbox" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3"></div>
                                        <div>
                                            <label htmlFor="" className="label-control textbody">Last Name</label>
                                        </div>
                                        <div className="mb-3">
                                            <input onChange={(e) => {
                                                setLastName(e.target.value)
                                            }} type="text" class="form-control inputbox" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3"></div>
                                        <div>
                                            <label htmlFor="" className="label-control textbody">Email</label>
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                                type="email" class="form-control inputbox" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3"></div>
                                        <div>
                                            <label htmlFor="" className="label-control textbody">Phone number</label>
                                        </div>
                                        <div className="mb-3">
                                            <input onChange={(e) => {
                                                setPhoneNo(e.target.value)
                                            }} type="text" class="form-control inputbox" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3"></div>
                                        <div>
                                            <label htmlFor="" className="label-control textbody">Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }}
                                                type="password" class="form-control inputbox" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-3"></div>
                                        <div>
                                            <label htmlFor="" className="label-control textbody">Confirm password</label>
                                        </div>
                                        <div className="mb-3">
                                            <input onChange={(e) => {
                                                setConfirmPassword(e.target.value)
                                            }} type="password" class="form-control inputbox" />
                                        </div>
                                    </div>
                                </div>


                                <div className="mb-3">
                                    <button onClick={signupEmployee} className="btn btn-primary">
                                        Signup
                                    </button>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupEmployee