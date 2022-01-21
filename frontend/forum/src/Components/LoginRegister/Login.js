import './LoginRegister.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { callCenterLogin, clientLogin, jobSeekerLogin } from '../../redux/actions/AuthAction'
import { DropdownButton,Dropdown} from 'react-bootstrap'
import Alert from '../Alerts/Alert'


export default function Login() {
  const [role,setRole]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [formData,setFormData]=useState({email:"",password:""})
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    role==='JobSeeker' ? dispatch(jobSeekerLogin(formData,navigate))
  : role==='CallCenter' ? dispatch(callCenterLogin(formData,navigate)) 
  : dispatch(clientLogin(formData,navigate))
  }
    return(
        <div>
          <Alert />
        <title>Se connecter</title>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="img-01.png" alt="IMG" />
              </div>
              <form className="login100-form validate-form" onSubmit={handleSubmit} >
                <span className="login100-form-title">
                  Membre ?
                </span>
                <DropdownButton title="Login as..." variant="dark" className='dropField' name='role'>
                
                    <Dropdown.Item   onClick={()=>setRole('JobSeeker')} >Chercheur d'emploi</Dropdown.Item>
                    <Dropdown.Item   onClick={()=>setRole('CallCenter')} >Centre d'appel</Dropdown.Item>
                    <Dropdown.Item   onClick={()=>setRole('Client')} >Client</Dropdown.Item>
                
                </DropdownButton>
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" name="email" placeholder="Email" onChange={handleChange} />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="password" placeholder="Mot de passe" onChange={handleChange} />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Se connecter
                  </button>
                </div>
                <div className="text-center p-t-12">
                  <span className="txt1">
                    Oublié :
                  </span>
                  <a className="txt2" >
                    Email / Mot de passe?
                  </a>
                </div>
                <div className="text-center p-t-136">
                  <Link to='/register'>
                  <a className="txt2" >
                    Créer un compte
                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                  </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
};
