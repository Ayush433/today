import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();
  const movie = {
    title: "Avatar",
    generic: "friction",
  };
  return (
    <div>
      <Navbar />
      Welcome
      <div>
        <button
          onClick={() => {
            nav("/about", { state: movie });
          }}
          className="bg-orange-200 p-2 my-2"
        >
          Go TO Navbar with data{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
