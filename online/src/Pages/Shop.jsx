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

  const AddToCart = (bookId, numberOfBooks) => {
    sessionStorage.setItem("bookId", bookId, "numberOfBooks", numberOfBooks);
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
            <div onClick={() => BookInfo("book01")}>
              <h2>
                <a href="/">Item1</a>
              </h2>
              <img alt="book1" id="Book01" value="book1" src={Book01} />
            </div>
            <p>Item1Description</p>
            <div onClick={() => AddToCart("book01")}>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
          <th>
            <div onClick={() => BookInfo("book02")}>
              <h2>Item2</h2>
              <img alt="book2" id="Book02" src={Book02} />
            </div>
            <p>Item2Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
          <th>
            <div onClick={() => BookInfo("book03")}>
              <h2>Item3</h2>
              <img alt="book3" id="Book03" src={Book03} />
            </div>
            <p>Item3Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div onClick={() => BookInfo("book04")}>
              <h2>Item4</h2>
              <img alt="book4" id="Book04" src={Book04} />
            </div>
            <p>Item4Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
          <th>
            <div onClick={() => BookInfo("book05")}>
              <h2>Item5</h2>
              <img alt="book5" id="Book05" src={Book05} />
            </div>
            <p>Item5Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
          <th>
            <div onClick={() => BookInfo("book06")}>
              <h2>Item6</h2>
              <img alt="book6" id="Book06" src={Book06} />
            </div>
            <p>Item6Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div onClick={() => BookInfo("book07")}>
              <h2>Item7</h2>
              <img alt="book7" id="Book07" src={Book07} />
            </div>
            <p>Item7Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
          <th>
            <div onClick={() => BookInfo("book08")}>
              <h2>Item8</h2>
              <img alt="book8" id="Book08" src={Book08} />
            </div>
            <p>Item8Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
          <th>
            <div onClick={() => BookInfo("book09")}>
              <h2>Item9</h2>
              <img alt="book9" id="Book09" src={Book09} />
            </div>
            <p>Item9Description</p>
            <div>
              <input type="number" />
              <button>Add</button>
            </div>
          </th>
        </tr>
      </table>
    </form>
  );
}
