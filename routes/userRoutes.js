import express from 'express'
import { getGithubDetails, getCountryDetails } from '../controllers/user.js';


const router = express.Router();



// router.get('/getuser/:userid', getUser);

// router.post('/signup', signup);

router.get('/getdata/:username',getGithubDetails);

router.get('/data/:countryname',getCountryDetails);


export default router;