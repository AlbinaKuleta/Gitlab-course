const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This is my Node application for CICD demo')
})
app.listen(port, () => {
    console.log('Application is listening at http://localhost:${port}')
})