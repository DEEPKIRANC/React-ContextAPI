import { React } from "react";
import "./styles.css";
export default function Movie({ name, author, price }) {
  return (
    <div>
      <h3>Book Name :{name}</h3>
      <span>Author : {author}</span>
      <h5>Price : {price}</h5>
    </div>
  );
}
