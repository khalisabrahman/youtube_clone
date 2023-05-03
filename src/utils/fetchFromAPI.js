import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
    //   part: 'snippet',
    //   videoId: 'M7FIvfx5J10'
  },
  headers: {
    "X-RapidAPI-Key": '228906f4a3msh04b732610d8239ep15f266jsn964f3d542b77',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
