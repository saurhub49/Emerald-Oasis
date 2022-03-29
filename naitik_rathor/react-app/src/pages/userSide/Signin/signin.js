import { useState } from "react"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../../config'
import './signin.css'
import logo from '../../../assets/logo.png'


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
          toast.success('Welcome to Emerald Oasis')

          const { userId, firstName, lastName } = result['data']

          sessionStorage['userId'] = userId
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          console.log(firstName)

          navigate('/homepage')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div className="login">
      <nav id="navbar-example2" className="navbar fixed-top navbar-expand-lg navbar-light bg-black">
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
        <div className=" row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col ">
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