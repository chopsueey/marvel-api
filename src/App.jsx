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
        <div className="row d-flex justify-content-center">
        <div
          className="text-center d-flex flex-column col-md-6"
          style={{ color: "white" }}
        >
          <h2>Hey, großer Bruder, ich gratuliere dir herzlichst zu deinem Geburtstag!</h2>
          <p>Ich wünsche dir Erfolg, Gesundheit und Ausdauer auf deinem Weg
            zum Abschluss der Ausbildung und in privaten Dingen. Ich hoffe für dich,
            dass alles so klappen wird, wie du es dir vorstellst und wünschst.
          
          </p>
          <p>
            Und ja... wie du siehst, habe ich eine kleine Website gebaut.
            Du kannst oben Charaktere von
            Marvel suchen und dir zum Beispiel deren Comics anschauen. Ich
            baue über die Wochen noch mehr ein und ändere noch das Design, weil
            ich die Website dann als Projekt vorstelle. Aber die Grundfunktion
            klappt erstmal. Vielleicht hast du ja noch Ideen, was man einbauen
            kann. :D
            (Manche links klappen nicht, aber das liegt anscheinend an veralteten Server-Einträgen.)
            
          </p>
          <p>Liebe Grüße, Marius</p>
        </div>
        </div>
        {/* <Button onClick={loadMoreHandler}>load more</Button> */}
      </div>
    </div>
  );
}

export default App;
