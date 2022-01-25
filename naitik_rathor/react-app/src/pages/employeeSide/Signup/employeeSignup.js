import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../../config'
import './employeeSignup.css'
import image from '../../../images/deliverybg.png'


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
            toast.warning('Enter First name')
        }
        if (lastName.length == 0) {
            toast.warning('Enter Last name')
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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="empdiv">
                            <img src={image} className="picture1" alt="" />
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