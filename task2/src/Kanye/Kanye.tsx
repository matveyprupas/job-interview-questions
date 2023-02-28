import React from "react";
import "./Kanye.css";

/*
 * This is a GET endpoint, that returns a random Kanye West Quote
 * Format: {"quote":"This is a random quote"}
 */
const QUOTE_API_URL = "https://api.kanye.rest";

const fetchRandomQuote = async () => {}; // Implement this function

/*
 * Implement a simple app, that displays a random Kanye West quote on the click of a button.
 * Use the QUOTE_API_URL above to request data via GET.
 * Use Hooks for your implementation.
 */
const Kanye: React.FC = () => {
  return <h1 className="kanyeTitle">Kanye Component</h1>;
};

export default Kanye;
