import md5 from "md5";
import React, { createContext, useContext, useState } from "react";
import { privateKey, publicKey } from "../../own/keys";

const InitialContext = createContext();

export function GeneralContext({ children }) {
  // variables
  const [responseData, setResponseData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // const [offSet, setOffSet] = useState(0);
  const limit = 100;

  function searchHandler(e) {
      e.preventDefault();

    // user input
    const userSearch = document
      .querySelector(".form-control")
      .value.toLowerCase();

    // create timestamp and hash with md5 ('npm i md5' to get the package)
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + privateKey + publicKey);

    // insert all information in the fetch request
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${userSearch}&limit=${limit}`
    )
      .then((res) => {
          console.log(res)
        if (!res.ok) {
          throw Error(`Couldn't fetch data. StatusCode: ${res.status}, ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setResponseData([...data.data.results]);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    // const data = await response.json();
    // console.log(data.data.results);
    // setResponseData([...data.data.results]);

    // function loadMoreHandler() {
    //   setOffSet(prevOffSet => prevOffSet + 20)

    // }
  }
  // value
  const sharedData = {
    responseData,
    setResponseData,
    isPending,
    setIsPending,
    error,
    setError,
    searchHandler
  };

  return (
    <InitialContext.Provider value={sharedData}>
      {children}
    </InitialContext.Provider>
  );
}

const Store = () => useContext(InitialContext);
export default Store;
