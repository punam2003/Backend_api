import express from 'express';

const app = express();

// Sample user data (assuming this is fetched from a database)
const userData = [
    { id: 1, name: "Punam", RollNo: "1", city: "Shirpur" },
    { id: 2, name: "Gayatri", RollNo: "2", city: "Pune" },
    { id: 3, name: "Rutuja", RollNo: "3", city: "Nashik" }
];

app.get('/', (req, res) => {
    const myResponse = {
        message: "Yes you are at home route",
        success: true,
    };
    res.json(myResponse);
});

app.get('/api/getuser/:userid', (req, res) => {
    const { userid } = req.params;

    

    // Find the user by their ID
    const user = userData.find(user => user.id === parseInt(userid));

    if (user) {
        res.json({
            success: true,
            userDetails: user
        });
    } else {
        res.json({
            success: false,
            message: "User not found"
        });
    }
});

app.listen(3000, () => {
    console.log(`Server is listening on http://localhost:3000`);
});
