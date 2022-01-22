import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../../config'
import { toast } from 'react-toastify'


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
            else{
                toast.error('Enter Password')
            }
        }
        else{
            toast.error('Enter Email')
        }
    }


    return (
        <div>
            <form onSubmit={signinUser}>
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1 align="center">Welcome Back</h1>
                    </div>
                    <div className="col">
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
                                No account yet? <Link to="/usersignup">Signup Here</Link>
                            </div>
                            <button  type="submit" className="btn btn-primary">
                                Signin
                            </button>
                            <button type="reset" className="btn btn-primary">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin
