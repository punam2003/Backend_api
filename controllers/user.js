import axios from 'axios';
export const getGithubDetails = async(req, res) => {
    const {username} = req.params;
   const API = `https://api.github.com/users/${username}`
   
   axios.get(API)
    .then((response)=>{
        res.json(response.data);
    })
    .catch((err)=>{
        console.log("Error occured while fetching github details: ", err)

        res.status(400).json({
            message: "Error fetching github details",
            success: false
        });
    })  
}
export const getCountryDetails = async(req, res) => {
    const {countryname} = req.params;
   const API = `https://restcountries.com/v3.1/name/${countryname}`
   
   axios.get(API)
    .then((response)=>{
        res.json(response.data);
    })
    .catch((err)=>{
        console.log("Error occured while fetching country details: ", err)

        res.status(400).json({
            message: "Error fetching country details",
            success: false
        });
    })  
}
