import React from "react";
import Book01 from "../Images/Books/Book_01.png";
import Book02 from "../Images/Books/Book_02.png";
import Book03 from "../Images/Books/Book_03.png";
import Book04 from "../Images/Books/Book_04.png";
import Book05 from "../Images/Books/Book_05.png";
import Book06 from "../Images/Books/Book_06.png";
import Book07 from "../Images/Books/Book_07.png";
import Book08 from "../Images/Books/Book_08.png";
import Book09 from "../Images/Books/Book_09.png";

export default function Books() {
  const BookNumber = sessionStorage.getItem("bookId");
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

  console.log("BookNumber:", BookNumber);
  console.log("All keys:", Object.keys(Books));
  console.log("Selected image:", Books[BookNumber]);


  return (
    <form>
      <div>
        <tr>
          <th>
            <div>
              <h2>Item7</h2>
              <img alt="ChoosedBook" id="ChoosedBook" src={Books[BookNumber]} />
            </div>
            <p>Item7Description</p>
          </th>
        </tr>
      </div>
    </form>
  );
}
