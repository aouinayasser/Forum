import './LoginRegister.css'
import { Dropdown,DropdownButton } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { jobSeekerRegister,callCenterRegister,clientRegister } from '../../redux/actions/AuthAction'
import { useNavigate } from 'react-router-dom'


export default function Register() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [role,setRole]=useState('')
  const [formData,setFormData]=useState({firstname:"",lastname:"",email:"",password:"",role:"",companyName:""})
  console.log(role)
  const handleSelect=(e)=>{
    setFormData({...formData,role: e})
  }
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    role==='JobSeeker' ? dispatch(jobSeekerRegister(formData,navigate)) 
  : role==='CallCenter' ? dispatch(callCenterRegister(formData,navigate)) 
  : dispatch(clientRegister(formData,navigate))
  }
    return(
        <div>
        <title>Register</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
        <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img src="img-01.png" alt="IMG" />
              </div>
              
              <form className="login100-form validate-form" onSubmit={handleSubmit} >
                <span className="login100-form-title">
                  S'enregistrer
                </span>

                <DropdownButton title="Role" variant="dark" className='dropField' name='role' onSelect={handleSelect} >
                
                    <Dropdown.Item  eventKey="JobSeeker" onClick={()=>setRole('JobSeeker')} >Chercheur d'emploi</Dropdown.Item>
                    <Dropdown.Item  eventKey="CallCenter" onClick={()=>setRole('CallCenter')} >Centre d'appel</Dropdown.Item>
                    <Dropdown.Item  eventKey="Client" onClick={()=>setRole('Client')} >Client</Dropdown.Item>
                
                </DropdownButton>

                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="firstname" placeholder="Nom" onChange={handleChange} />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                
                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="lastname" placeholder="Prénom" onChange={handleChange} />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                
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

                <div className="wrap-input100 validate-input" data-validate="Confirm password is required">
                  <input className="input100" type="password" name="confirmPassword" placeholder="Confirmer mot de passe" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                {
                  (role==='CallCenter'||role==='Client') && <div className="wrap-input100 validate-input" data-validate="Company name is required">
                  <input className="input100" type="text" name="companyName" placeholder="Company name" onChange={handleChange} />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                }

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn">
                    Valider
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    )
};