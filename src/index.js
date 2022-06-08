import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import { books } from "./books";
import { Book } from "./Book";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        // return <Book key={book.id} book={book}></Book>; same as below code
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

root.render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
