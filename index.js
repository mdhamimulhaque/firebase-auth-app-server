const express = require('express');
const app = express()
const port = 5000;


// ---> server test
app.get('/', (req, res) => {
    res.send("The server is running...")
})


app.listen(port, () => {
    console.log(`The server is running from ${port}`)
})
