const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()


app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/service', (req, res) => {
    res.render('service')
})
app.get('/contact-us', (req, res) => {
    res.render('contact')
})

app.listen(4444, () => {
    console.log("server is running on port number 4000");
})
