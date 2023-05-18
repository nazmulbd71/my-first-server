const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('my first server ever')
})

app.listen(port, () => {
    console.log(`my first server listening on port ${port}`)
})