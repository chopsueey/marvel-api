import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Characters from "./components/Characters";
import store from "./store/Context";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  //**test
  // const {userSearch, searchHandler, setUserSearch } = store()
  // useEffect(function () {
  //   console.log("yes");
  //   searchHandler();
  // }, [userSearch])

  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <section className="col-8 col-lg-6 col-xl-4 my-2">
            <SearchForm />
          </section>
        </div>
        <Characters />
        
        {/* <Button onClick={loadMoreHandler}>load more</Button> */}
      </div>
    </div>
  );
}

export default App;
