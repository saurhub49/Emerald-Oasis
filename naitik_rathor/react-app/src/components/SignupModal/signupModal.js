import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../../config"

const SignupModal = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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

                // console.log(result)

                if (result['status'] === 'success') {
                    toast.success('Signup Success')
                    window.location.reload(false)
                }
                else {
                    toast.error(result['error'])
                }
            })
        }
    }
    return (
        <div className="md-div">
            <label className="login-txt mb-4">Sign Up</label>
            <div class="row mb-3">
                <div className="col">
                    <label for="exampleFormControlInput1" class="form-label">Firstname</label>
                    <input onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} type="text" class="form-control" placeholder="" />
                </div>
                <div className="col">
                    <label for="exampleFormControlInput1" class="form-label">Lastname</label>
                    <input onChange={(e)=>{
                        setLastName(e.target.value)
                    }} type="text" class="form-control" placeholder="" />
                </div>
            </div>
            <div class="row mb-3">
                <div className="col">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} type="email" class="form-control" placeholder="" />
                </div>
                <div className="col">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input onChange={(e)=>{
                        setPhoneNo(e.target.value)
                    }} type="text" class="form-control" placeholder="" />
                </div>
            </div>
            <div class="row mb-3">
                <div className="col">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} type="password" class="form-control" placeholder="" />
                </div>
                <div className="col">
                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                    <input onChange={(e)=>{
                        setConfirmPassword(e.target.value)
                    }} type="password" class="form-control" placeholder="" />
                </div>
            </div>
            <div className="row">
                <button type="button" className="btn btn1 btn-lg" onClick={signupUser}><label className="login-btn">SIGN UP</label></button>
            </div>
        </div>
    )
}

export default SignupModal