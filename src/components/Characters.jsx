import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../store/Context";
import InfoCard from "./InfoCard";

export default function Characters() {
  const { responseData } = store();

  return (
    <div className="row d-flex justify-content-center my-5">
      {responseData && responseData.length === 0 ? (
        <div className="row text-center my-5">
          <h3 style={{ color: "white" }}>
            Nothing matches your search request :/
          </h3>
        </div>
      ) : ""}

      {responseData ? responseData.map((character) => (
        <InfoCard key={character.id} character={character}/>
      )) : ""}
    </div>
  );
}
