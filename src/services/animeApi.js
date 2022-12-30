import axios from "axios";

export async function AnimeData() {
  try {
    const { data } = await axios("https://animechan.vercel.app/api/random");
    return data;
  } catch (error) {
    console.log(error);
  }
}
