const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

const streamRouter = require('./stream/router')

const jsonParser = bodyParser.json()

app.listen(port, () => console.log('Server is running on port ', port))
app.use(jsonParser)
app.use(streamRouter)
app.get('/', (req, res) => {
    console.log("Recieved a get request");
    res.send('Hi!')
})