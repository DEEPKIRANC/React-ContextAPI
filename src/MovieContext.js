import { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [bookList, setBookList] = useState([
    { name: "The Alchemist", author: "Paulo Coelho", price: 150 },
    { name: "The Psychology Of Money", author: "Morgan Housel", price: 260 },
    { name: "You Don't Know JS", author: "Kyle Simpson", price: 1100 }
  ]);
  return (
    <BookContext.Provider value={[bookList, setBookList]}>
      {props.children}
    </BookContext.Provider>
  );
};
