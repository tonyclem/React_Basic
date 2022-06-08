import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/31VkNi4xZWL._SX322_BO1,204,203,200_.jpg",
    title: "Winner have a Story",
    author: "Giuseppe Marzio, PhD",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
];

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

// const author = "Giuseppe Marzio, PhD";
// const title = "Winner have a Story";
// const img =
//   "https://images-na.ssl-images-amazon.com/images/I/31VkNi4xZWL._SX322_BO1,204,203,200_.jpg";

const Book = (props) => {
  // Object Destructuring
  // const Book = ({img, title, author, children}) =>
  //  or both the same

  const { img, title, author } = props;

  const clickHandler = () => {
    alert("hello world");
  };

  return (
    <article>
      <img className="img" src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
    </article>
  );
};

root.render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
