import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../../config'
import './signup.css'
import img2 from '../../../assets/add-user.png'

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
            toast.error('Enter Firstname')
        }
        else if (email.length == 0) {
            toast.error('Enter Email')
        }
        else if (password.length == 0) {
            toast.error('Enter Password')
        }
        else if (confirmPassword.length == 0) {
            toast.error('Confirm Password')
        }
        else if (password != confirmPassword) {
            toast.error('Password Mismatch')
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

    return <>
        <div>
            <div className="signup-box">
                <img className="signup-logo" src={img2} alt="user logo" />
                <div className="signup-form">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="">First Name</label>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            onChange={(e) => {
                                                setFirstName(e.target.value)
                                            }}
                                            type="text" class="form-control" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3"></div>
                                    <div>
                                        <label htmlFor="">Last Name</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setLastName(e.target.value)
                                        }} type="text" class="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <label htmlFor="">Email Address</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} type="email" class="form-control" required />
                                    </div>
                                    <div>
                                        <label htmlFor="">Password</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} type="password" class="form-control" placeholder="Abcd@123" />
                                    </div>
                                    <div className="mb-3">
                                        Already Having Account?<br />
                                        <Link to="/signin">Sigin here </Link>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button onClick={signupUser} type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                        <div className="col">
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <label htmlFor="">Phone Number</label>
                                    </div>
                                    <div className="mb-3">
                                        <input onChange={(e) => {
                                            setPhoneNo(e.target.value)
                                        }} type="tel" class="form-control" placeholder="+91XXXXXXXXX" />
                                    </div>
                                    <div >
                                        <div>
                                            <label htmlFor="">Confirm Password</label>
                                        </div>
                                        <div className="mb-3">
                                            <input onChange={(e) => {
                                                setConfirmPassword(e.target.value)
                                            }} type="password" class="form-control" placeholder="Confirm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SignupUser