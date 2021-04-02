import { React, useContext } from "react";
import { BookContext } from "./MovieContext";
import "./styles.css";
export default function Nav() {
  const [bookList, setBookList] = useContext(BookContext);
  return (
    <div>
      <nav className="Navbar">
        <h2>The Ultimate BookStore</h2>
        <span>Product Cart: {bookList.length}</span>
      </nav>
    </div>
  );
}
