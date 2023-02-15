const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const fs = require('fs');
const authRoutes = require("./routes/auth.routes");
const retailRoutes = require("./routes/retail.routes");
const contextualRoutes = require("./routes/contextual.routes");
const surveyRoutes = require("./routes/survey.route");
const gameplayRoutes = require('./routes/gameplay.routes');
const gameRoutes = require('./routes/game.routes');
const descriptiveRoutes = require('./routes/descriptive.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// const db = require("./models");

// MY_SQL Connection 
const conn = require('./mysql/connectionVerify');

const PORT = process.env.PORT;
app.get('/', (req, res, next) => {
    res.send("HELLO, I am redeployed v1, Please verify!")
});

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));
app.use(cors(
    {
        origin: "*", // allow the server to accept request from different origin,
        // allowedHeaders: ["Content_Type", "Authorization","X-Requested-With"],
        allowedHeaders: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true // allow session cookie from browser to pass through
    }
));
app.use('/auth', authRoutes);
app.use('/contextual', contextualRoutes);
app.use('/retail', retailRoutes);
app.use('/survey', surveyRoutes);
app.use('/gameplay', gameplayRoutes);
app.use('/game', gameRoutes);
app.use('/descriptive', descriptiveRoutes)


conn.connect((err, conn) =>{ 
    if(err) return console.log(err);
    if(conn) console.log("MySQL database connected!");
    // db.sequelize.sync().then((req) =>{
        app.listen(PORT, (err) => {
            if(err) console.log("Error in starting Server: " +  err);
            else console.log(`Starting server on PORT ${PORT}`);
        });
    // })
});