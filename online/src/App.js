import "./App.css";
import NavBar from "./Pages/NavBar";
import OpenPage from "./Pages/OpenPage";
import Login from "./Pages/RegLog/Login";
import Register from "./Pages/RegLog/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Images/Books/Shop";
import ShopCart from "./Pages/Order/ShopCart";
import BooksInformation from "./Images/Books/BooksInformation";
import OrdersData from "./Pages/Order/OrdersData";
import OrderSummary from "./Pages/Order/OrderSummary";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<OpenPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/booksinfo" element={<BooksInformation />} />
          <Route path="/shopcart" element={<ShopCart />} />
          <Route path="/ordersdata" element={<OrdersData />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
