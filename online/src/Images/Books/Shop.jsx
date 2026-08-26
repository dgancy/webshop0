import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BooksData from "./Books";

export default function Shop() {
  const nav = useNavigate();

  const BookInfo = (bookId) => {
    sessionStorage.setItem("bookId", bookId);
    nav("/booksinfo");
  };

  const books = BooksData;

  const [Quantities, setQuantities] = useState({
    book01: "",
    book02: "",
    book03: "",
    book04: "",
    book05: "",
    book06: "",
    book07: "",
    book08: "",
    book09: "",
  });

  const DataToShopCart = async (bookId) => {
    const dataToBackend = {
      bookId,
      quantity: Quantities[bookId],
    };

    console.log("Küldött adat:", dataToBackend);
    try {
      const response = await fetch("http://localhost:5000/shopcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToBackend),
      });
      console.log(response);
    } catch (error) {
      console.log("Hiba:", error);
    }
  };

  return (
    <form className="gallery">
      {Object.entries(books).map(([bookId, book]) => (
        <div className="gallery-item" key={bookId}>
          <div onClick={() => BookInfo(bookId)}>
            <h2>{book.name} </h2>
            <img alt={book.name} src={book.image} />
            <p>{book.description}</p>
          </div>
          <div className="desc">
            <input
              className="in"
              width="50px"
              type="number"
              value={Quantities[bookId]}
              onChange={(e) =>
                setQuantities({
                  ...Quantities,
                  [bookId]: Number(e.target.value),
                })
              }
            />
            <button type="button" onClick={() => DataToShopCart(bookId)}>
              Add
            </button>
          </div>
        </div>
      ))}
    </form>
  );
}
