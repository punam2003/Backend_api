import express from 'express';
const app = express();
import bodyParser from 'body-parser';



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



const blogs = [
    { id: 1, title: ' Blog 1', image: 'https://www.weetechsolution.com/wp-content/uploads/2022/08/What-is-Nodejs.jpg', author: 'Ankit Chawla' },
    { id: 2, title: ' Blog 2', image: 'https://www.yaleinfotech.com/wp-content/uploads/2023/08/react-js.png', author: 'Jordan Walke' }
];

app.get('/blogs', (req, res) => {
    res.render('blogs', { blogs });
});

app.get('/create-blog', (req, res) => {
    res.render('create_blog');
});


app.post('/create-blog', (req, res) => {
    const { title, image, author } = req.body;
    const newBlog = {
        id: blogs.length + 1,
        title: title,
        image: image,
        author: author
    };
    blogs.push(newBlog);
    res.redirect('/blogs');
});


app.listen(3000, ()=>{
      console.log("Server Listening on Port 3000")
     })