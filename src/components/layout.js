import React from "react";

import Footer from "./footer";
import Header from "./header";
import Contact from "./contact";

export default function Layout({
  children,
  companyName,
  logo,
  navigationLinks,
  facebookUrl,
  twitterUrl,
  googleUrl,
  contact,
}) {
  return (
    <>
      <Header logo={logo} companyName={companyName} />

      {children}
      <Contact
        description={contact.description}
        buttonLink={contact.button_link}
        buttonText={contact.button_text}
      />
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
