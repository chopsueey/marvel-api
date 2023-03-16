import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "./InfoCard";
import Store from "../store/GeneralContext";

export default function Results() {
const { responseData } = Store()
  return (
    <>
      {responseData && responseData.length === 0 ? (
        <div className="row text-center my-5">
          <h3 style={{ color: "white" }}>
            Nothing matches your search request :/
          </h3>
        </div>
      ) : (
        ""
      )}

      {responseData
        ? responseData.map((character) => (
            <InfoCard key={character.id} character={character} />
          ))
        : ""}
    </>
  );
}
