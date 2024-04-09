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
export const getWeatherDetails = (req, res) => {
    const { cityname } = req.params;

    const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=hi&q=${cityname}&appid=7bb9b35cc693855543828b7927f507f0`;

    axios.get(API)
        .then((response) => {
            const { weather, wind } = response.data;
            const { id, main, description, icon } = weather[0];
            const { speed, deg, gust } = wind;

            const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Weather Details</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f0f0f0;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 800px;
                            margin: 50px auto;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 10px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            text-align: center;
                            margin-bottom: 20px;
                            color: #333;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 20px;
                            background-color: #fff;
                            border-radius: 10px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        th, td {
                            padding: 10px;
                            text-align: left;
                            border-bottom: 1px solid #ddd;
                        }
                        th {
                            background-color: #f2f2f2;
                            color: #333;
                        }
                        img {
                            max-width: 50px;
                            display: block;
                            margin: 0 auto;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Weather Details for ${cityname}</h1>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Main</th>
                                <th>Description</th>
                                <th>Icon</th>
                                <th>Wind Speed (m/s)</th>
                                <th>Wind Direction (degrees)</th>
                                <th>Wind Gust (m/s)</th>
                            </tr>
                            <tr>
                                <td>${id}</td>
                                <td>${main}</td>
                                <td>${description}</td>
                                <td><img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"></td>
                                <td>${speed}</td>
                                <td>${deg}</td>
                                <td>${gust}</td>
                            </tr>
                        </table>
                    </div>
                </body>
                </html>
            `;

            // Send HTML content as the response
            res.send(htmlContent);
        })
        .catch((err) => {
            console.log("Error occurred while fetching weather details: ", err);

            res.status(400).json({
                message: "Error fetching weather details",
                success: false
            });
        });
}
