import React from "react";

import Footer from "./footer";
import Header from "./header";

export default function Layout({
  children,
  companyName,
  logo,
  navigationLinks,
  facebookUrl,
  twitterUrl,
  googleUrl,
}) {
  return (
    <>
      <Header logo={logo} companyName={companyName} />

      {children}

      <Footer
        logo={logo}
        companyName={companyName}
        navigationLinks={navigationLinks}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        googleUrl={googleUrl}
      />
    </>
  );
}
