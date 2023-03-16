import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Favourites from "../store/FavContext";

export default function InfoCard({ character }) {
  const { favourites, setFavourites } = Favourites();

  // check if card is already in the favourite storage
  // and toggle a true or false variable on component mount
  const [isFav, setIsFav] = useState();

  useEffect(() => {
    if (favourites.length > 0) {
      favourites.forEach((char) =>
        char.id === character.id ? setIsFav(true) : ""
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function favClickHandler() {
    setFavourites((state) => [...state, character]);

    setIsFav(true);

    console.log(character);
  }

  return (
    <Card
      className="col-10 col-md-6 col-lg-5 col-xl-3"
      style={{ backgroundColor: "black", margin: "4px", padding: "10px" }}
    >
      <Card.Img
        style={{ aspectRatio: "1/1", borderRadius: "0" }}
        src={`${character.thumbnail.path}.jpg`}
      />
      <Card.Body
        className="d-flex flex-column justify-content-around"
        style={{ backgroundColor: "black", borderTop: "solid 5px #ec1d24" }}
      >
        <Card.Title style={{ color: "white", fontSize: "2rem" }}>
          {character.name}
        </Card.Title>
        {/* <Card.Text style={{ color: "white" }}>
        {character.description}
      </Card.Text> */}
        <ul style={{ listStyleType: "none", padding: "0", color: "#ec1d24" }}>
          <li>comics: {character.comics.available}</li>
          <li>events: {character.events.available}</li>
          <li>series: {character.series.available}</li>
          <li>stories: {character.stories.available}</li>
        </ul>
        <div className="d-flex justify-content-center">
          {character.urls
            .filter((obj) => obj.type !== "wiki")
            .map((urlsObj) => (
              <li style={{ listStyleType: "none" }}>
                <Button
                  variant="light"
                  style={{ color: "black", margin: "3px" }}
                  href={urlsObj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {urlsObj.type === "detail" ? "Details" : "Comics"}
                </Button>
              </li>
            ))}
        </div>
        {isFav ? (
          <h3 style={{ color: "red" }}>Is your fav</h3>
        ) : (
          <Button onClick={favClickHandler}>fav</Button>
        )}
      </Card.Body>
    </Card>
  );
}
