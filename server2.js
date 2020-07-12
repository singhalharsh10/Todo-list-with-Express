// with hbs rendering

const express = require('express');
const { urlencoded } = require('express');
const app = express()

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs')

let tasks = [
    'Brush'
]

// app.get('/', (req, res) => {
//     res.render('home', {
//             title: 'Tasks'
//         }) //second parameter is used to send some data
// });


app.get('/', (req, res) => {
    res.render('home', {
            title: 'Todo-List',
            tasks //passing an aray of tasks
        }) //second parameter is used to send some data
});

app.post('/', (req, res) => {
    tasks.push(req.body.task)
    res.redirect('/')
})


app.listen(3000, () => {
    console.log("Server has started at paort 3000")
})