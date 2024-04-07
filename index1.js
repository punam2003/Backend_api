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
import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

app.use('/api', userRoutes)

app.listen(3000, ()=>{
    console.log("Server Listening on Port 3000")
})


