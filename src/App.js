import "./styles.css";
import Nav from "./Nav";
import MovieList from "./MovieList";
import { BookProvider } from "./MovieContext";
import AddBook from "./AddBook";
export default function App() {
  return (
    <BookProvider>
      <div className="App">
        <Nav />
        <AddBook />
        <MovieList />
      </div>
    </BookProvider>
  );
}
