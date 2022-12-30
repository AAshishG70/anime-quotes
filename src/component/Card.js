import { MdMovieFilter } from "react-icons/md";
import { GiCharacter } from "react-icons/gi";
import { BsChatRightQuoteFill } from "react-icons/bs";
import "./Card.css";

function Card({ animeDetails }) {
  const { anime, character, quote } = animeDetails;
  // const anime = animeDetails.anime;
  // const character = animeDetails.character;
  // const quote = animeDetails.quote;
  return (
    <div className="container">
      <MdMovieFilter />
      {anime}
      <br />
      <GiCharacter />
      {character}
      <br />
      <BsChatRightQuoteFill />
      {quote}
    </div>
  );
}

export default Card;
