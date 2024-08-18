import React from "react";
import MainCard from "../Card/MainCard";
import "./Home.css";
import Navbar from "../Navbar/Nav"
import SearchBar from "../SearchBar/SearchBar";
import Animation from "../Animation/Animation";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Animation/>
    </div>
  );
};

export default Home;
