const express = require("express");
const cors = require("cors");
require("dotenv").config();
const setupSwagger = require('./config/swagger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger setup
setupSwagger(app);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to EduShare REST API' });
});

require("./routes/authroute")(app);
require("./routes/commentroute")(app);
require("./routes/materialroute")(app);
require("./routes/ratingroute")(app);
require("./routes/userroute")(app);

app.listen(3000, () => {
    console.log('Server is running on port ' + 3000 + '.');
});
