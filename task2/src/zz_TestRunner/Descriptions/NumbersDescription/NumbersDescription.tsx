import React from "react";
import "./NumbersDescription.css";

const NumbersDescription: React.FunctionComponent = () => {
  return (
    <div className="numbersDescription">
      <p>
        Open the Numbers Component -<b>src/Numbers/Numbers.tsx</b>
      </p>
      <p>It's is displayed on the right side.</p>
      <p>
        Take a look at the code for this component. Please tell us any ways you
        think the code can be improved. Imagine you got a PR with this code,
        what would you tell the author?
      </p>
    </div>
  );
};

export default NumbersDescription;
