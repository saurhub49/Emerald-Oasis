import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../../config'
import './userSignup.css'
import logo from '../../../assets/logo.png'


const SignupUser = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const signupUser = () => {
        if (firstName.length == 0) {
            toast.warning('Enter First name')
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

            const url = `${URL}/user/signup`

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
        <div className="signupuser">
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
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <div className="form usersignupformmargin">
                            <div className="row">
                                <h1 className="usersignuptextheader">Sign up</h1>
                            </div>
                            <hr className="usersignuptextheader" />


                            <div className="row">
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="" className="label-control usersignuptextbody">First Name</label>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            onChange={(e) => {
                                                setFirstName(e.target.value)
                                            }}
                                            type="text" class="form-control usersignupinputbox" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="" className="label-control usersignuptextbody">Last Name</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setLastName(e.target.value)
                                        }} type="text" class="form-control usersignupinputbox" />
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="" className="label-control usersignuptextbody">Email</label>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                            type="email" class="form-control usersignupinputbox" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="" className="label-control usersignuptextbody">Phone number</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setPhoneNo(e.target.value)
                                        }} type="text" class="form-control usersignupinputbox" />
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="" className="label-control usersignuptextbody">Password</label>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                            type="password" class="form-control usersignupinputbox" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="" className="label-control usersignuptextbody">Confirm password</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                        }} type="password" class="form-control usersignupinputbox" />
                                    </div>
                                </div>
                            </div>


                            <div className="mb-3">
                                <button onClick={signupUser} className="btn btn-primary">
                                    Signup
                                </button>
                            </div>
                            <div className="mb-3">
                                <div className='usersignuptextbody'>
                                    Already Having Account? <Link to="/signin">Signin here</Link>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}

export default SignupUser