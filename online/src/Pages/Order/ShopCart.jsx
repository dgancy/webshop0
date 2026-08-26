import React, { useEffect, useState } from "react";
import BooksData from "../../Images/Books/Books";
import { useNavigate } from "react-router-dom";

export default function ShopCart() {
  const [shopCart, setShopCart] = useState([]);

  const Books = BooksData;

  const GetShopCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/shopcart");
      const data = await response.json();

      console.log("Backendtől kapott kosár:", data);

      setShopCart(data);
    } catch (error) {
      console.error("Hiba a kosár lekérésekor:", error);
    }
  };

  useEffect(() => {
    GetShopCart();
  }, []);

  const nav = useNavigate();

  const NavigateToOrderData = () => {
    nav("/ordersdata");
  };

  return (
    <form>
      <div>
        <h1>Shopping Cart</h1>

        {shopCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          shopCart.map((item, index) => (
            <div key={index}>
              <img
                src={Books[item.bookId].image}
                alt={item.bookId}
                width="100"
              />
              <h2>{item.bookId}</h2>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        )}
      </div>
      <div>
        <button onClick={NavigateToOrderData}>Continue</button>
      </div>
    </form>
  );
}
