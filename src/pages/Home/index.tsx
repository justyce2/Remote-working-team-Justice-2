import React from "react";
import Sections from "./Sections";

const Home = () => {
  return (
    <main>
      <Sections variant="header" />
      <Sections variant="hero" />
      <Sections variant="trustedBy" />
      <Sections variant="unlockCareer" />
      <Sections variant="simplifyAndEnhance" />
      <Sections variant="AccessTopAfricanTalent" />
      <Sections variant="getStartedToday" />
      <Sections variant="footer" />
    </main>
  );
};

export default Home;
