const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend működik!",
  });
});

app.post("/register", (req,res, ) => {//app.post where we want the data, request the data and response something for that.
    console.log("Data from Frontend : ");
    console.log(req.body); //REQuest the bodz which contains the data from frontend

    res.json({
      message: "Registration data received successfully : ",//backend write it for response.
      receivedData: req.body, //
    });
  });



  
app.listen(5000, () => {
  console.log("Server fut: 5000");
});

fetch("http://localhost:5000")
  .then((res) => res.json())
  .then((data) => console.log(data));
