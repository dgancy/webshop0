const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend működik!"
    });
});

app.listen(5000, () => {
    console.log("Server fut: 5000");
});

fetch("http://localhost:5000")
  .then(res => res.json())
  .then(data => console.log(data));

  