import React, { useEffect, useState } from "react";
import BooksData from "../../Images/Books/Books";

export default function OrderSummary() {
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

  const [user, setUser] = useState([]);

  const GetUsderData = async () => {
    try {
      const response = await fetch("http://localhost:5000/userdata");
      const Udata = await response.json();

      console.log("Backendtől kapott kosár:", Udata);

      setUser(Udata);
    } catch (error) {
      console.error("Hiba a kosár lekérésekor:", error);
    }
  };

  useEffect(() => {
    GetShopCart();
    GetUsderData();
  }, []);

  return (
    <form>
      <div>
        <h1>Shopping Cart</h1>

        {shopCart.map((item, index) => (
          <div key={index}>
            <img src={Books[item.bookId].image} alt={item.bookId} width="100" />
            <h2>{item.bookId}</h2>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div>
        {user.map((item, index) => (
          <div key={index}>
            <p>{item.fullName}</p>
            <p>{item.mail}</p>
            <p>{item.phoneNumber}</p>
            <p>{item.location}</p>
          </div>
        ))}
      </div>
      <div>
        <button>Continue</button>
      </div>
    </form>
  );
}
