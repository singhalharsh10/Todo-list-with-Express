// Without hbs engine
const express = require('express');
const { urlencoded } = require('express');
const app = express()

app.use(express.urlencoded({ extended: true }));

let tasks = [
    'Brush'
]

app.get('/', (req, res) => {
    let tasklist = tasks.map(t => `<li>${t}</li>`).join('\n')
    res.send(`
    <html>
    <head>
    <title>
    </title>
    </head>
    <body>
    <form action="/" method="POST">
        <input type="text" name="task" >
        <button type="submit" id="btnadd">ADD</button>
    </form>
    <ul>
    ${tasklist}
    </ul>
    </body>
    </html>
    `)
});

app.post('/', (req, res) => {
    tasks.push(req.body.task)
    res.redirect('/')
})


app.listen(3000, () => {
    console.log("Server has started at paort 3000")
})