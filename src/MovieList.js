import { React, useContext } from "react";
import { BookContext } from "./MovieContext";
import Movie from "./Movie";
export default function MovieList() {
  const [bookList, setBookList] = useContext(BookContext);
  return (
    <div>
      {bookList.map((book) => (
        <Movie
          key={book.name}
          name={book.name}
          author={book.author}
          price={book.price}
        />
      ))}
    </div>
  );
}
