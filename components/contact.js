import React from "react";

export default function Contact({ description, buttonLink, buttonText }) {
  React.useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".cta", {
      duration: 600,
      distance: "40px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      interval: 100,
      origin: "bottom",
      viewFactor: 0.2,
    });
  });

  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-inner section-inner ">
          <h3
            className="section-title mt-0"
            dangerouslySetInnerHTML={{ __html: description }}
          ></h3>

          <div className="cta-cta">
            <a
              className="button button-primary button-shadow"
              href={buttonLink}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
