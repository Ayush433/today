import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const About = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <Navbar />

      <h1>Hi</h1>
      <h2>{state.title}</h2>
    </div>
  );
};

export default About;
