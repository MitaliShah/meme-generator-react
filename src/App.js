import React from "react";
import "./styles.css";
import Header from "./Header.js";
import MemeGenerator from "./MemeGenerator.js";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <MemeGenerator />
    </React.Fragment>
  );
}
