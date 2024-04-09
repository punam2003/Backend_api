import express from 'express'
import { getGithubDetails, getCountryDetails,getWeatherDetails } from '../controllers/user.js';


const router = express.Router();



// router.get('/getuser/:userid', getUser);

// router.post('/signup', signup);

router.get('/getdata/:username',getGithubDetails);

router.get('/data/:countryname',getCountryDetails);

router.get('/viewdata/:cityname',getWeatherDetails);


export default router;