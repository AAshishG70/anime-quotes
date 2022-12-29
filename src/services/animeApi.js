import axios from "axios";
export async function AnimeData() {
  const { data } = await axios("https://animechan.vercel.app/api/random");
  return data;
}
