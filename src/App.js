import { useContext } from "react";
import { AnimeContext } from "./context/AnimeContext";
import Card from "./component/Card";
import "./index.css";
import { GrLinkNext } from "react-icons/gr";

function App() {
  const { anime, buttonHandler } = useContext(AnimeContext);
  return (
    <body>
      {(anime && (
        <div>
          <Card animeDetails={anime} />
          <button onClick={() => buttonHandler()}>
            <GrLinkNext />
          </button>
        </div>
      )) || <div>Loading..</div>}
    </body>
  );
}

export default App;
