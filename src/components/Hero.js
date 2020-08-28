import React from "react";

export default function Hero({ children, hero }) {
  //   const { hero } = props;
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero", //means ke hu jo parent class ma arcument nay nakhu to default value tarikhe aa le 6
};
