const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const streamRouter = require('./stream/router')

app.listen(port, () => console.log('Server is running on port ', port))
app.use(streamRouter)
app.get('/', (req, res) => {
    console.log("Recieved a get request");
    res.send('Hi!')
})

