import axios from "axios";
import config from "../../config";

export async function RandomGifAPI() {
  const RandomAPI = `${config.API_URL}/v1/gifs/random?api_key=${config.API_KEY}`;
  console.log(RandomAPI);

  const Result = await axios.get(RandomAPI).then(({ data }) => {
    return data;
  });
  return Result;
}
