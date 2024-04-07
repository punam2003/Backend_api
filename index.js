import express from 'express';
import userRoutes  from './routes/userRoutes.js';

// Create an app
const app = express();


app.use(express.json());

app.use('/api/',userRoutes)
// Define the port number
const PORT = 3000;

// Start the server and  listen on  port
app.listen(PORT, () => {
  console.log(`Server is listening on port 3000`);
});





