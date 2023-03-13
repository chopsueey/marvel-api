import { Button, Card } from "react-bootstrap";

export default function InfoCard(props) {
  const { character } = props;

  return (
    <Card
      className="col-10 col-md-6 col-xl-3"
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
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
