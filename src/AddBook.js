import { React, useState, useContext } from "react";
import { BookContext } from "./MovieContext";
import "./styles.css";

export default function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState();
  const [bookList, setBookList] = useContext(BookContext);

  const addBook = (e) => {
    e.preventDefault();
    setBookList((prevbookList) => [
      ...prevbookList,
      { name: name, author: author, price: price }
    ]);
  };
  return (
    <form onSubmit={addBook}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Book Name"
      />

      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Enter Author Name"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Book Price"
      />

      <button>Add New Book</button>
    </form>
  );
}
