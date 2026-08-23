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

  const [numberOfBooks, setNumberOfBooks] = useState({
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
      bookId: bookId,
      quantity: numberOfBooks[bookId],
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
      <div className="gallery-item">

    <div>
      <h1>Shopping Cart</h1>

      {(
        shopCart.map((item, index) => (
          <div key={index}>
            <img src={Books[item.bookId]} alt={item.bookId} width="100" />

            <h2>{item.bookId}</h2>

            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>




        <div onClick={() => BookInfo("book01")}>
          <h2>
            <a href="/">Item1</a>
          </h2>
          <img alt="book1" id="Book01" value="book1" src={Book01} />
          <p>Item1Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book01}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book01: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book01")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book02")}>
          <h2>Item2</h2>
          <img alt="book2" id="Book02" src={Book02} />
          <p>Item2Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book02}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book02: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book02")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book03")}>
          <h2>Item3</h2>
          <img alt="book3" id="Book03" src={Book03} />
          <p>Item3Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book03}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book03: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book03")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book04")}>
          <h2>Item4</h2>
          <img alt="book4" id="Book04" src={Book04} />
          <p>Item4Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book04}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book04: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book04")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book05")}>
          <h2>Item5</h2>
          <img alt="book5" id="Book05" src={Book05} />
          <p>Item5Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book05}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book05: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book05")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book06")}>
          <h2>Item6</h2>
          <img alt="book6" id="Book06" src={Book06} />
          <p>Item6Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book06}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book06: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book06")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book07")}>
          <h2>Item7</h2>
          <img alt="book7" id="Book07" src={Book07} />
          <p>Item7Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book07}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book07: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book07")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book08")}>
          <h2>Item8</h2>
          <img alt="book8" id="Book08" src={Book08} />
          <p>Item8Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            width="50px"
            type="number"
            value={numberOfBooks.book08}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book08: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book08")}>
            Add
          </button>
        </div>
      </div>
      <div className="gallery-item">
        <div onClick={() => BookInfo("book09")}>
          <h2>Item9</h2>
          <img alt="book9" id="Book09" src={Book09} />
          <p>Item9Description</p>
        </div>
        <div className="desc">
          <input
            className="in"
            type="number"
            value={numberOfBooks.book09}
            onChange={(e) =>
              setNumberOfBooks({
                ...numberOfBooks,
                book09: e.target.value,
              })
            }
          />
          <button type="button" onClick={() => DataToShopCart("book09")}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
