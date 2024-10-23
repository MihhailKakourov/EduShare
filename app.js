const express = require("express")
const cors = require("cors")
require("dotenv").config();

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to EduShare REST API' })
})

require("./routes/authroute")(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT + '.')
})