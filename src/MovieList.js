import React, { useState } from "react";
import "./styles.css";

function MovieList({ movies }) {
  console.log(movies);
  return (
    <>
      {movies.map((item, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          {item.image !== undefined && item.title !== undefined ? (
            <img
              src={item.image.url}
              key={item.id + item.image}
              alt={item.image}
              className="fit-pic"
              title={item.title}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}

export default MovieList;
