import React from "react";

import { Footer, Header } from "../../../components";

/** Sections  */
import AccessTopAfricanTalent from "../AccessTopAfricanTalent";
import GetStarted from "../GetStarted";
import Hero from "../Hero";
import SimplifyAndEnhance from "../SimplifyAndEnhance";
import TrustedBy from "../TrustedBy";
import UnlockCareer from "../UnlockCareer";

type Props = {
  variant:
    | "header"
    | "hero"
    | "trustedBy"
    | "unlockCareer"
    | "simplifyAndEnhance"
    | "AccessTopAfricanTalent"
    | "getStartedToday"
    | "footer";
};

const Sections = ({ variant }: Props) => {
  switch (variant) {
    case "header":
      return <Header />;

    case "footer":
      return <Footer />;

    case "hero":
      return <Hero />;

    case "trustedBy":
      return <TrustedBy />;

    case "unlockCareer":
      return <UnlockCareer />;

    case "simplifyAndEnhance":
      return <SimplifyAndEnhance />;
    case "AccessTopAfricanTalent":
      return <AccessTopAfricanTalent />;

    case "getStartedToday":
      return <GetStarted />;
    default:
      null;
  }
};

export default Sections;
