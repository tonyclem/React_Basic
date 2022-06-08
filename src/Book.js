export const Book = (props) => {
  // Object Destructuring
  // const Book = ({img, title, author, children}) =>
  //  or both the same

  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article>
      <img className="img" src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  );
};
