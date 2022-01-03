const express=require('express')
const router=express.Router()
const { jobSeekerRegisterRules,jobSeekerValidator,jobSeekerLoginRules }=require('../middleware/jobSeekerValidator')
const { callCenterRegisterRules,callCenterValidator,callCenterLoginRules }=require('../middleware/callCenterValidator')
const { clientRegisterRules,clientValidator,clientLoginRules }=require('../middleware/clientValidator')
const jobSeekerIsAuth = require('../middleware/jobSeekerIsAuth')
const callCenterIsAuth = require('../middleware/callCenterIsAuth')
const clientIsAuth = require('../middleware/clientIsAuth')
const { signUpJobSeeker,singInJobseeker,currentJobSeeker } = require('../Controllers/JobSeeker')
const { signUpCallCenter,singInCallCenter,currentCallCenter } = require('../Controllers/CallCenter')
const { signUpClient,singInClient,currentClient } = require('../Controllers/Client')

//////////// JOB SEEKER //////////////

//@ url api/auth/jobseeker/signup
//@ method post
//@ req.body
router.post('/jobseeker/signup',[jobSeekerRegisterRules,jobSeekerValidator],signUpJobSeeker)

//@ url api/auth/jobseeker/signin
//@ method post
//@ req.body
router.post('/jobseeker/signin',[jobSeekerLoginRules,jobSeekerValidator],singInJobseeker)

//@ url/api/auth/jobseeker/current
//@ method get
//@ req.headers
router.get('/jobseeker/current',jobSeekerIsAuth,currentJobSeeker)

//////////// CALL CENTER //////////////

//@ url api/auth/callcenter/signup
//@ method post
//@ req.body
router.post('/callcenter/signup',[callCenterRegisterRules,callCenterValidator],signUpCallCenter)

//@ url api/auth/callcenter/signin
//@ method post
//@ req.body
router.post('/callcenter/signin',[callCenterLoginRules,callCenterValidator],singInCallCenter)

//@ url api/auth/callcenter/current
//@ method get
//@ req.headers
router.get('/callcenter/current',callCenterIsAuth,currentCallCenter)

//////////// CLIENT //////////////

//@ url api/auth/client/signup
//@ method post
//@ req.body
router.post('/client/signup',[clientRegisterRules,clientValidator],signUpClient)

//@ url api/auth/client/signin
//@ method post
//@ req.body
router.post('/client/signin',[clientLoginRules,clientValidator],singInClient)

//@ url api/auth/client/current
//@ method get
//@ req.headers
router.get('/client/current',clientIsAuth,currentClient)

module.exports=router