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
    console.log(bookId);

    sessionStorage.setItem("bookId", bookId);
    console.log("session stored : ",sessionStorage.getItem("bookId"))
    nav("/books");
  };

  return (
    <form
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        left: "50%",
      }}
    >
      <table
        style={{
          border: "1px solid",
          borderCollapse: "separate",
          borderSpacing: "10px",
          paddingTop: "10px",
        }}
      >
        <tr>
          <th>
            <div onClick={() => BookInfo("book1")}>
              <h2>
                <a href="/">Item1</a>
              </h2>
              <img alt="book1" id="book1" value="book1" src={Book01} />
            </div>
            <p>Item1Description</p>
          </th>
          <th>
            <div onClick={() => BookInfo("book2")}>
              <h2>Item2</h2>
              <img alt="book2" id="book2" src={Book02} />
            </div>
            <p>Item2Description</p>
          </th>
          <th>
            <div onClick={() => BookInfo("book3")}>
              <h2>Item3</h2>
              <img alt="book3" id="book3" src={Book03} />
            </div>
            <p>Item3Description</p>
          </th>
        </tr>
        <tr>
          <th>
            <div onClick={() => BookInfo("book4")}>
              <h2>Item4</h2>
              <img alt="book4" id="book4" src={Book04} />
            </div>
            <p>Item4Description</p>
          </th>
          <th>
            <div onClick={() => BookInfo("book5")}>
              <h2>Item5</h2>
              <img alt="book5" id="book5" src={Book05} />
            </div>
            <p>Item5Description</p>
          </th>
          <th>
            <div onClick={() => BookInfo("book6")}>
              <h2>Item6</h2>
              <img alt="book6" id="book6" src={Book06} />
            </div>
            <p>Item6Description</p>
          </th>
        </tr>
        <tr>
          <th>
            <div onClick={() => BookInfo("book7")}>
              <h2>Item7</h2>
              <img alt="book7" id="book7" src={Book07} />
            </div>
            <p>Item7Description</p>
          </th>
          <th>
            <div onClick={() => BookInfo("book8")}>
              <h2>Item8</h2>
              <img alt="book8" id="book8" src={Book08} />
            </div>
            <p>Item8Description</p>
          </th>
          <th>
            <div onClick={() => BookInfo("book9")}>
              <h2>Item9</h2>
              <img alt="book9" id="book9" src={Book09} />
            </div>
            <p>Item9Description</p>
          </th>
        </tr>
      </table>
    </form>
  );
}
