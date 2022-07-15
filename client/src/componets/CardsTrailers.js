import React from "react";
import "./Cards.css";

import { usePosts } from "../context/postContext";

function CardsTrailers() {
  const { posts } = usePosts();
  console.log(posts);
  return (
    <div className="cards ">
      <h1 className="animate-pulse">Trailers</h1>
      <div className="cards__container bg-indigo-500 ">
        <div className="cards__wrapper flex justify-center align-middle animate-pulse">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U9sM-KYWZqM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default CardsTrailers;
