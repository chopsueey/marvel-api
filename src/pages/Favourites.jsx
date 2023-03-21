import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoCard from "../components/InfoCard";
import FavouritesStore from "../store/FavContext";

export default function Results() {
  const { favourites } = FavouritesStore();
  return (
    <div className="container my-5">
      <section className="row d-flex justify-content-center">
        {favourites
          ? favourites.map((dataObj) => (
              <InfoCard key={dataObj.id} dataObj={dataObj} />
            ))
          : ""}
      </section>
    </div>
  );
}
