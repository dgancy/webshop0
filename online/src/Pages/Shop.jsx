import { useState } from "react";
import Book01 from "../Images/Books/Book_01.png";
import Book02 from "../Images/Books/Book_02.png";
import Book03 from "../Images/Books/Book_03.png";
import Book04 from "../Images/Books/Book_04.png";
import Book05 from "../Images/Books/Book_05.png";
import Book06 from "../Images/Books/Book_06.png";
import Book07 from "../Images/Books/Book_07.png";
import Book08 from "../Images/Books/Book_08.png";
import Book09 from "../Images/Books/Book_09.png";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const nav = useNavigate();

  const BookInfo = (bookId) => {
    sessionStorage.setItem("bookId", bookId);
    nav("/books");
  };

  const books = {
    book01: { name: "Item01", image: Book01, description: "Item01Description" },
    book02: { name: "Item02", image: Book02, description: "Item02Description" },
    book03: { name: "Item03", image: Book03, description: "Item03Description" },
    book04: { name: "Item04", image: Book04, description: "Item04Description" },
    book05: { name: "Item05", image: Book05, description: "Item05Description" },
    book06: { name: "Item06", image: Book06, description: "Item06Description" },
    book07: { name: "Item07", image: Book07, description: "Item07Description" },
    book08: { name: "Item08", image: Book08, description: "Item08Description" },
    book09: { name: "Item09", image: Book09, description: "Item09Description" },
  };

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
