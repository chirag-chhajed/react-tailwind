import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-[80vh]">
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        corporis ullam tempora nobis omnis facilis pariatur, repellat id
        recusandae quod?
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </section>
  );
};

export default NotFound;
