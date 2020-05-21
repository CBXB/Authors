const express = require("express");
const cors = require("cors");
const port = 8000;
const db_name = "authorDB"
const app = express();

app.use(cors());
app.use(express.json());

require("./server/config/mongoose")(db_name);
require("./server/routes/Authors.routes")(app);


app.listen(port, ()=> console.log(`Listening on port ${port}`))