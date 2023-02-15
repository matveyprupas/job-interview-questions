import { createRoot } from "react-dom/client";

import Example1 from "./Example1";
import Task2 from "./Task2";
import Task3 from "./Task3";
import Task4 from "./Task4";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <Example1 />
    {/* <Task2 /> */}
    {/* <Task3 /> */}
    {/* <Task4 /> */}
  </div>
);
