import { createContext, useEffect, useState } from "react";
import { AnimeData } from "../services/animeApi";

const AnimeContext = createContext(null);

function AnimeProvider({ children }) {
  const [anime, setAnime] = useState();

  useEffect(() => {
    AnimeData().then((res) => {
      setAnime(res);
    });
  }, []);

  function buttonHandler() {
    AnimeData().then((res) => {
      setAnime(res);
    });
  }

  return (
    <AnimeContext.Provider value={{ anime, buttonHandler }}>
      {children}
    </AnimeContext.Provider>
  );
}

export { AnimeContext, AnimeProvider };
