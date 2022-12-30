import { useContext } from "react";
import { AnimeContext } from "./context/AnimeContext";
import Card from "./component/Card";

function App() {
  const { anime, buttonHandler } = useContext(AnimeContext);
  return (
    <>
      {(anime && (
        <div>
          <Card animeDetails={anime} />
          <button onClick={() => buttonHandler()}>Next</button>
        </div>
      )) || <div>Loading..</div>}
    </>
  );
}

export default App;
