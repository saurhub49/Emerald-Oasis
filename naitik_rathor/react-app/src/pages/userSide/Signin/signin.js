import { useState } from "react"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../../config'
import './signin.css'


const Signin = () => {
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
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          const { userId, firstName, lastName } = result['data']

          sessionStorage['userId'] = userId
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName

          navigate('/customerhome')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="form signinformmargin">
              <h1 className='signintextheader'>  Sign in</h1>
              <hr className="signintextheader" />
              <div className="user-logo" className="mb-3">
                <label htmlFor="" className="label-control signintextbody">
                  Email address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="text"
                  className="form-control signininputbox"
                  placeholder="test@gmail.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control signintextbody">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control signininputbox"
                  placeholder="*******"
                />
              </div>

              <div className="mb-3">
                <div className='signintextbody'>
                  No account yet? <Link to="/signupUser">Signup here</Link>
                </div>
                <br />
                <button onClick={signinUser} className="btn btn-primary">
                  Signin
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Signin