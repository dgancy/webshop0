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

  const selectedBookData = Books[BookNumber];

  console.log("BookNumber:", BookNumber);

  return (
    <form>
      <div>
        <div>
          <h2>{selectedBookData.name}</h2>
          <img
            alt="ChoosedBook"
            id="ChoosedBook"
            src={selectedBookData.image}
          />
        </div>
        <p>{selectedBookData.description}</p>
      </div>
    </form>
  );
}
