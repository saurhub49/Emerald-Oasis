import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import user from '../../assets/user-icon.png'
import lock from '../../assets/lock-Icon.png'
import './signinModal.css'
import {URL} from '../../config'

const SigninModal = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const signinUser = () => {
        if (email.length == 0) {
            toast.warning('Enter Email')
        } else if (password.length == 0) {
            toast.warning('Enter Password')
        } else {
            const body = {
                email,
                password,
            }

            const url = `${URL}/user/signin`

            axios.post(url, body).then((response) => {
                const result = response.data
                // console.log(result)
                if (result['status'] == 'success') {
                    toast.success('Welcome to Emerald Oasis')

                    const { userId, firstName, lastName, roleId } = result['data']

                    sessionStorage['userId'] = userId
                    sessionStorage['roleId'] = roleId
                    sessionStorage['firstName'] = firstName
                    sessionStorage['lastName'] = lastName
                    sessionStorage['loginStatus'] = '1'

                    navigate('/homepage')
                    window.location.reload(false)

                } else {
                    toast.error(result['error'])
                }
            })
        }
    }


    return (
        <div className="md-div">
            <label className="login-txt mb-4">Login</label>
            <div className="input-group mb-4">
                <img src={user} alt="" />
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="input-group mb-4">
                <img src={lock} alt="" />
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="row">
                <button type="button" className="btn btn1 btn-lg"  onClick={signinUser}><label className="login-btn">LOGIN</label></button>
            </div>
        </div>
    )
}

export default SigninModal