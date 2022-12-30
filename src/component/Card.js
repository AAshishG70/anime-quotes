function Card({ animeDetails }) {
  const { anime, character, quote } = animeDetails;
  // const anime = animeDetails.anime;
  // const character = animeDetails.character;
  // const quote = animeDetails.quote;
  return (
    <div>
      {anime}
      <br />
      {character}
      <br />
      {quote}
    </div>
  );
}

export default Card;
