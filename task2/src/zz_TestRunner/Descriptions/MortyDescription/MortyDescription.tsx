import React from "react";
import "./MortyDescription.css";

const MortyDescription: React.FunctionComponent = () => {
  return (
    <div className="mortyDescription">
      <p>
        This is a <i>GET</i> endpoint
        <br />
        <div className="box">"https://rickandmortyapi.com/api/character"</div>
        <br />
        that returns the <i>Rick and Morty</i> characters list
      </p>
      <span>Format: </span>
      <p className="box">
        <samp>
          &#123; "info": &#123; "count": 826, "pages": 42, "next":
          "https://rickandmortyapi.com/api/character/?page=2" "prev": null
          &#125;, "results": [ // ... ] &#125;
        </samp>
      </p>

      <p>
        {" "}
        See the{" "}
        <a
          className="link"
          href="https://rickandmortyapi.com/documentation/#rest"
          target="_blank"
          rel="noreferrer">
          documentation here.
        </a>{" "}
      </p>
      <p>
        Choose a way to display the characters. For each character show the{" "}
        <b>image, name, origin name, location name</b> and <b>episodes count</b>
        .
      </p>
      <p>
        Use the <b>src/Morty/Morty.tsx</b> component. It's displayed on the
        right side.
      </p>
    </div>
  );
};

export default MortyDescription;
