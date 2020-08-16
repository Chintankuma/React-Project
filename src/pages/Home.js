import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Hero>
      <Banner title="luxurious Rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
