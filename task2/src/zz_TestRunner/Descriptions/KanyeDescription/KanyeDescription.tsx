import React from "react";
import "./KanyeDescription.css";

const KanyeDescription: React.FunctionComponent = () => {
  return (
    <div className="kanyeDescription">
      <p>
        This is a <i>GET</i> endpoint
        <br />
        <div className="box">
          const QUOTE_API_URL = "https://api.kanye.rest"
        </div>
        <br />
        that returns a random Kanye West Quote
      </p>
      <span>Format: </span>
      <p className="box">&#123; "quote": "This is a random quote" &#125;</p>

      <p>
        Implement a simple app, that displays a random Kanye West quote on the
        click of a button. Use the <i>QUOTE_API_URL</i> above to request data
        via <i>GET</i>. Use Hooks for your implementation.
      </p>
      <p>
        Use the <b>src/Kanye/Kanye.tsx</b> component. It's displayed on the
        right side.
      </p>
    </div>
  );
};

export default KanyeDescription;
