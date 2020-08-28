import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "free cocktail",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus.",
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless Hiking",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus.",
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "free beer",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus.",
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "free shuttle",
        info:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, accusamus.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
