import React from "react";
import Book01 from "../Images/Books/Book_01.png"
import Book02 from "../Images/Books/Book_02.png"
import Book03 from "../Images/Books/Book_03.png"
import Book04 from "../Images/Books/Book_04.png"
import Book05 from "../Images/Books/Book_05.png"
import Book06 from "../Images/Books/Book_06.png"
import Book07 from "../Images/Books/Book_07.png"
import Book08 from "../Images/Books/Book_08.png"
import Book09 from "../Images/Books/Book_09.png"

export default function Shop() {
  return (
    <form style={{height: "100vh", width: "100%", position:"relative" , left:"50%"}}>
      <table style={{border:"1px solid", borderCollapse:"separate", borderSpacing:"10px", paddingTop:"10px"}}>
        <tr>
          <th>
            <h2>Item1</h2>
            <img alt="book1"  src={Book01} />
            <p>Item1Description</p>
          </th>
          <th></th>
          <th>
            <h2>Item2</h2>
            <img alt="book2" src={Book02} />
            <p>Item2Description</p>
          </th>
          <th></th>
          <th>
            <h2>Item3</h2>
            <img alt="book3" src={Book03} />
            <p>Item3Description</p>
          </th>
          <th></th>
        </tr>
        <tr>
          <th>
            <h2>Item4</h2>
            <img alt="book4" src={Book04} />
            <p>Item4Description</p>
          </th>
          <th></th>
          <th>
            <h2>Item5</h2>
            <img alt="book5" src={Book05} />
            <p>Item5Description</p>
          </th>
          <th></th>
          <th>
            <h2>Item6</h2>
            <img alt="book6" src={Book06} />
            <p>Item6Description</p>
          </th>
          <th></th>
        </tr>
        <tr>
          <th>
            <h2>Item7</h2>
            <img alt="book7" src={Book07} />
            <p>Item7Description</p>
          </th>
          <th></th>
          <th>
            <h2>Item8</h2>
            <img alt="book8" src={Book08} />
            <p>Item8Description</p>
          </th>
          <th></th>
          <th>
            <h2>Item9</h2>
            <img alt="book9" src={Book09} />
            <p>Item9Description</p>
          </th>
          <th></th>
        </tr>
      </table>
    </form>
  );
}
