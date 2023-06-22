const express = require('express')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())


app.listen(5000, (req, res)=> {
    console.log('server running')
})


app.get("/", (req, res)=> {
    res.json({
        message: "hello"
    })
})