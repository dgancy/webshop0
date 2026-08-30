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

app.post("/register", (req, res) => {
  //app.post where we want the data, request the data and response something for that.
  console.log("Data from Frontend : ");
  console.log(req.body); //REQuest the bodz which contains the data from frontend

  res.json({
    message: "Registration data received successfully : ", //backend write it for response.
    receivedData: req.body, //
  });
});

let shopCart = [];

app.post("/shopcart", (req, res) => {
  //app.post where we want the data, request the data and response something for that.
  const { bookId, quantity } = req.body;
  console.log("Data from Frontend : ", req.body); //REQuest the bodz which contains the data from frontend

  shopCart.push({
    bookId: bookId,
    quantity: quantity,
  });

  console.log("shopcart : ", shopCart);

  res.status(200).json({
    message: "ShopCart data received successfully : ", //backend write it for response.
    receivedData: req.body, //
  });
});

app.get("/shopcart", (req, res) => {
  res.json(shopCart);
});

let userData = [];

app.post("/userdata", (req, res) => {
  //app.post where we want the data, request the data and response something for that.
  const { fullName, mail, phoneNumber, location } = req.body;
  console.log("UserData from Frontend : ", req.body); //REQuest the bodz which contains the data from frontend

  userData.push({
    fullName: fullName,
    mail: mail,
    phoneNumber: phoneNumber,
    location: location,
  });
  
  res.status(200).json({
    message: "ShopCart data received successfully : ", //backend write it for response.
    receivedData: req.body, //
  });
});

app.get("/userdata", (req, res) => {
  console.log("UserData in backend : ", userData);
  res.json(userData);
});

app.listen(5000, () => {
  console.log("Server fut: 5000");
});

fetch("http://localhost:5000")
  .then((res) => res.json())
  .then((data) => console.log(data));
