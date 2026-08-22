import React, { useEffect, useState } from "react";
import Book01 from "../Images/Books/Book_01.png";
import Book02 from "../Images/Books/Book_02.png";
import Book03 from "../Images/Books/Book_03.png";
import Book04 from "../Images/Books/Book_04.png";
import Book05 from "../Images/Books/Book_05.png";
import Book06 from "../Images/Books/Book_06.png";
import Book07 from "../Images/Books/Book_07.png";
import Book08 from "../Images/Books/Book_08.png";
import Book09 from "../Images/Books/Book_09.png";

export default function ShopCart() {
  const [shopCart, setShopCart] = useState([]);

  const Books = {
    book01: Book01,
    book02: Book02,
    book03: Book03,
    book04: Book04,
    book05: Book05,
    book06: Book06,
    book07: Book07,
    book08: Book08,
    book09: Book09,
  };

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

  return (
    <div>
      <h1>Shopping Cart</h1>

      {shopCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        shopCart.map((item, index) => (
          <div key={index}>
            <img src={Books[item.bookId]} alt={item.bookId} width="100" />

            <h2>{item.bookId}</h2>

            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}
