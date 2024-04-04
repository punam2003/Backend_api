import express from 'express';

// Create an app
const app = express();


app.get('/', (req, res) => {
  res.send('This is Day1');
});

// Define the port number
const PORT = 3000;

// Start the server and  listen on  port
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:3000`);
});





