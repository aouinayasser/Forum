import './LoginRegister.css'
import { Dropdown } from 'react-bootstrap'
import { useState } from 'react'


export default function Register() {
  const [role,setRole]=useState('')
  console.log(role)
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
              
              <form className="login100-form validate-form">
                <span className="login100-form-title">
                  S'enregistrer
                </span>

                <Dropdown className='dropField' >
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Vous êtes ?
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setRole('JobSeeker')} >Chercheur d'emploi</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setRole('CallCenter')} >Centre d'appel</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setRole('Client')} >Client</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="firstname" placeholder="Nom" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                
                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="lastname" placeholder="Prénom" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" name="email" placeholder="Email" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" placeholder="Mot de passe" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Confirm password is required">
                  <input className="input100" type="password" name="pass" placeholder="Confirmer mot de passe" />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>

                {
                  (role==='CallCenter'||role==='Client') && <div className="wrap-input100 validate-input" data-validate="Company name is required">
                  <input className="input100" type="text" name="company" placeholder="Company name" />
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
