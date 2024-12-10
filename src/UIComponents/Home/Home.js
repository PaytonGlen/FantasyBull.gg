import React from "react";
import "./Home.css"; // Add your styles here or use inline styling
import "./Home.css";
import Categories from "./Categories.js";
import Steps from "./Steps.js";
import Features from "./Features.js";
import PromiseComponent from "./PromiseSection.js";
import VideoGallery from "./VideoGallery.js";
import Hero from "./Hero.js";
import GameModesTxt from "./GameModesTxt.js";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <Hero />

      {/* Video Gallery Section */}
      <VideoGallery />
      <GameModesTxt />
      {/* Categories Section */}
      <Categories />

      {/* Steps Section */}
      <Steps />
      {/* Features Section */}
      <Features />

      {/* Promise Section */}
      <PromiseComponent />
    </div>
  );
};

export default HomePage;
