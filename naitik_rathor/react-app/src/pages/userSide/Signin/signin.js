import axios from 'axios'
import "./signin.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../../config'
import { toast } from 'react-toastify'
import img2 from '../../../assets/userLogo.png'
import img1 from '../../../assets/food.png'
import img3 from '../../../assets/image12.jpeg'


const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signinUser = () => {
        if (email.length !== 0) {
            if (password.length !== 0) {
                const body = {
                    email,
                    password
                }

                const url = `${URL}/user/signin`

                axios.post(url, body).then((response) => {
                    const result = response.data

                    console.log(result)

                    if (result['status'] = 'success') {
                        toast.success('Login success')

                        const { userId, firstName, lastName } = result['data']

                        sessionStorage['userId'] = userId
                        sessionStorage['firstName'] = firstName
                        sessionStorage['lastName'] = lastName
                        sessionStorage['loginStatus'] = 1

                        navigate('/')
                    }
                    else {
                        toast.error('Invalid username or password')
                    }
                })
            }
            else {
                toast.error('Enter Password')
            }
        }
        else {
            toast.error('Enter Email')
        }
    }


    return (
        <>
            <div >
                <div className="page-margin"  >

                    {/* <form> */}
                    <div className="row">
                        <div className="col">
                            <center className="" >
                                <img className="welcome-box" src={img3} />
                                <div className="welcome-txt">
                                    {/* Welcome to Emerald */}
                                    {/* <img className="img1" src={img1} alt="img3"></img> */}
                                </div>
                            </center>

                        </div>
                        <div className="col"></div>
                        <div className="col" >
                            <div className="form-box">
                                <img className="user-logo" src={img2} alt="user logo" />
                                <div className="login-form">
                                    <div className="mb-3">
                                        <div>
                                            <label htmlFor="" className="label-control">
                                                Email
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                                type="email" class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div>
                                            <label htmlFor="" className="label-control">
                                                Password
                                            </label>
                                        </div>
                                        <div>
                                            <input
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }}
                                                type="password" class="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            No account yet? <Link to="/signup">Signup here</Link>
                                        </div>
                                        <button onClick={signinUser} type="submit" className="btn btn-success">
                                            Signin
                                        </button>
                                    </div>
                                </div></div>


                        </div>
                    </div>
                    {/* </form> */}
                </div>
            </div>
        </>
    )
}

export default Signin
