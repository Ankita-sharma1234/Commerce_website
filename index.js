const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 5000;


// const { usersroute } = require("./Routes/adminRoutes/userRoutes.js");
// app.use('/',usersroute)

// const { usersroute } = require("./Routes/adminRoutes/userRoutes.js");
// app.use('/',usersroute)

const { roleroute } = require("./Routes/adminRoutes/roleRoutes.js");
app.use('/', roleroute)

app.listen(port, () => {
    console.log(`server is running on ${port} port`)
})