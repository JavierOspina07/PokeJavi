import { useState } from "react"
import axios from "axios"

const useFetch = url => {
  const [infoApi, setInfoApi] = useState()
  const [isLoading, setisLoading] = useState(true)

  //GET
  const getApi = () => {
    setisLoading(true)
    axios
      .get(url)
      .then(res => setInfoApi(res.data))
      .catch(err => console.log(err))
      .finally(() => setisLoading(true))
  }

  const getTypeApi = urlType => {
    setisLoading(true)
    axios
      .get(urlType)
      .then(res => {
        const obj = {
          results: res.data.pokemon.map(e => e.pokemon),
        }
        setInfoApi(obj)
      })
      .catch(err => console.log(err))
      .finally(() => setisLoading(true))
  }
  return [infoApi, getApi, getTypeApi, isLoading]
}

export default useFetch
