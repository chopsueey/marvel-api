import md5 from "md5";
import React, { createContext, useContext, useState } from "react";

const InitialContext = createContext();

const privateKey = "de2a5052b9194d8d496633ba3235d930ab9db764";
const publicKey = "d9800deab3518a2f15d9a56455f66a6d";

export function Context({ children }) {
  // variables
  const [responseData, setResponseData] = useState(null);

  // const [offSet, setOffSet] = useState(0);
  const limit = 100;
  //functions
  async function searchHandler(e) {
    e.preventDefault();

    // user input
    const userSearch = document
      .querySelector(".form-control")
      .value.toLowerCase();

    // create timestamp and hash with md5 ('npm i md5' to get the package)
    const timestamp = new Date().getTime().toString();
    const hash = md5(timestamp + privateKey + publicKey);

    // insert all information in the fetch request
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${userSearch}&limit=${limit}`
    );
    const data = await response.json();
    console.log(data.data.results);
    setResponseData([...data.data.results]);
  }

  // function loadMoreHandler() {
  //   setOffSet(prevOffSet => prevOffSet + 20)

  // }

  // value
  const sharedData = { searchHandler, responseData };

  return (
    <InitialContext.Provider value={sharedData}>
      {children}
    </InitialContext.Provider>
  );
}

const store = () => useContext(InitialContext);
export default store;
