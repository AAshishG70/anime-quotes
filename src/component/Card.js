import { MdMovieFilter } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight, FaRegUser } from "react-icons/fa";
import "./Card.css";

function Card({ animeDetails }) {
  const { anime, character, quote } = animeDetails;
  // const anime = animeDetails.anime;
  // const character = animeDetails.character;
  // const quote = animeDetails.quote;
  return (
    <div className="container">
      <h2>
        <MdMovieFilter />
        {"  " + anime}
      </h2>
      <h4>
        <FaRegUser />
        {"   " + character}
      </h4>
      <p>
        <FaQuoteLeft />
        {"    " + quote + "    "}
        <FaQuoteRight />
      </p>
    </div>
  );
}

export default Card;
