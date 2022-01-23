import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { URL } from '../../../config'
import './signup.css'
import img2 from '../../../assets/add-user.png'

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signupUser = () => {
        if (firstName.length !== 0) {
            if (email.length !== 0) {
                if (password.length !== 0) {
                    const body = {
                        firstName,
                        lastName,
                        gender,
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
                else {
                    toast.error("Enter Password")
                }
            }
            else {
                toast.error('Enter Email')
            }
        }
        else {
            toast.error('Enter firstName')
        }
    }


    return <>
        <div>
            <div className="signup-box">
                <img className="signup-logo" src={img2} alt="user logo" />
                <div className="signup-form">
                    <form>
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
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="">Gender</label>
                                            </div>
                                            <div className="col">
                                                <input onChange={(e) => {
                                                    setGender(e.target.value)
                                                }} type="radio" name="gender" value="M" />
                                                <label htmlFor="">Male</label>
                                            </div>
                                            <div className="col">
                                                <input onChange={(e) => {
                                                    setGender(e.target.value)
                                                }} type="radio" name="gender" value="F" />
                                                <label htmlFor="">Female</label>
                                            </div>
                                        </div>
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
                                            {/* <button type="reset" class="btn btn-light">Reset</button> */}
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
                                    <div class="alert alert-light" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                        <div style={{ font: 'small-caption' }}>
                                            *User-supplied passwords must be at-least eight alphanumeric characters
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Signup