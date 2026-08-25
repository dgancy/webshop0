import BooksData from "../Images/Books/Books.jsx";

export default function BooksInformation() {
  const BookNumber = sessionStorage.getItem("bookId");

  const selectedBookData = BooksData[BookNumber];

  console.log("BookNumber:", BookNumber);

  if (!selectedBookData) {
    return <p>Nem található könyv.</p>;
  }

  return (
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
  );
}
