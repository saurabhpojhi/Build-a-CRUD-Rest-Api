const express = require("express");
const cors = require("cors");
const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 3000;


var corsOptions = {
    origin: "http://localhost:3000"
  };

  app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route

app.get("/", (req, res) => {
    res.json({ message: "Rest API." });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });