import React from "react";
import { Routes, Route } from "react-router-dom";
import TestLayout from "./TestLayout/TestLayout";
import Dashboard from "./TestComponents/Dashboard/Dashboard";
import Numbers from "../Numbers/Numbers";
import Kanye from "../Kanye/Kanye";
import Morty from "../Morty/Morty";
import Items from "../Items/Items";

import NotFound from "./NotFound/NotFound";
import { tests } from "./utils/constants";

import "./App.css";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route
      path={tests.numbers.url}
      element={
        <TestLayout test={tests.numbers}>
          <Numbers />
        </TestLayout>
      }
    />
    <Route
      path={tests.kanye.url}
      element={
        <TestLayout test={tests.kanye}>
          <Kanye />
        </TestLayout>
      }
    />
    <Route
      path={tests.morty.url}
      element={
        <TestLayout test={tests.morty}>
          <Morty />
        </TestLayout>
      }
    />
    <Route
      path={tests.items.url}
      element={
        <TestLayout test={tests.items}>
          <Items />
        </TestLayout>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
