import axios from "axios";
import { baseURL } from "../constant/baseURL";

export const getJokes = async () => {
  try {
    // const url = baseURL + "/search?limit=10";
    const url = baseURL + "/search";

    const res = await axios({
      headers: { Accept: "application/json" },
      method: "GET",
      url,
      params: {
        limit: 10,
      },
    });

    return res;
  } catch (err) {
    console.log("err", err);
  }
};
