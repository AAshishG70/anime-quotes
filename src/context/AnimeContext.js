import { createContext, useEffect, useState } from "react";
import { AnimeData } from "../services/animeApi";

export function AnimeProvider({ children }) {
  const [anime, setAnime] = useState();
  const AnimeContext = createContext(null);
  useEffect(() => {
    const data = AnimeData().then((res) => {
      setAnime(res);
    });
  }, []);

  return (
    <AnimeContext.Provider value={anime}>{children}</AnimeContext.Provider>
  );
}
