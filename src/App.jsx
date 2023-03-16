import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { useEffect } from "react";
import Favourites from "./store/FavContext";
import Store from "./store/GeneralContext";
import Footer from "./components/Footer";

function App() {
  const { isPending, error } = Store();
  const { favourites, setFavourites } = Favourites();

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
      console.log(JSON.parse(storedFavourites));
      console.log(favourites);
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <section className="row d-flex justify-content-center">
          <div className="col-8 col-lg-6 col-xl-4 my-2">
            <SearchForm />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="row d-flex justify-content-center my-5">
          {isPending && (
            <h1 className="my-5 text-center" style={{ color: "white" }}>
              Loading...
            </h1>
          )}
          {error && (
            <h3 className="my-5 text-center" style={{ color: "white" }}>
              {error}
            </h3>
          )}
          <Results />
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
