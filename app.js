const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const authRoutes = require("./routes/auth.routes");
const retailRoutes = require("./routes/retail.routes");
const contextualRoutes = require("./routes/contextual.routes");
const surveyRoutes = require("./routes/survey.route");

// MY_SQL Connection 
const dbConnection = require('./mysql/mysqlConnection');
const conn = dbConnection.getConnection();

const PORT = process.env.PORT;
app.get('/', (req, res, next) => {
    res.send("HELLO")
});

app.use(express.json());
app.use(cors(
    {
        origin: "*", // allow the server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    }
));
app.use('/auth', authRoutes);
app.use('/contextual', contextualRoutes);
app.use('/retail', retailRoutes);
app.use('/survey', surveyRoutes);


conn.connect((err, conn) =>{ 
    if(err) return console.log(err);
    if(conn) console.log("MySQL database connected!");
    app.listen(PORT, (err) => {
        if(err) console.log("Error in starting Server: " +  err);
        else console.log(`Starting server on PORT ${PORT}`);
    })
});