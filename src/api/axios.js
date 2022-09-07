import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c18f8cdd83f41a34993cdbe284024884",
    language: "Ko-KR",
  },
});

export default instance;
