import { useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState();

  //GET
  const getApi = () => {
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  return [infoApi, getApi];
};

export default useFetch;
