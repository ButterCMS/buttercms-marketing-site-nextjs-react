import React from "react";

export default function Hero({
  headline,
  subheadline,
  buttonText,
  buttonLink,
}) {
  React.useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".hero-title, .hero-paragraph, .hero-cta", {
      delay: 150,
      duration: 1000,
      distance: "60px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      origin: "bottom",
      interval: 150,
    });

    sr.reveal(".hero-right-decoration", {
      duration: 1000,
      distance: "40px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      origin: "top",
    });

    sr.reveal(".hero-left-decoration", {
      duration: 1000,
      distance: "40px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      origin: "bottom",
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-left-decoration" />
      <div className="hero-right-decoration" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">{headline}</h1>

            {subheadline && <p className="hero-paragraph">{subheadline}</p>}

            <p className="hero-cta mb-0">
              <a
                className="button button-primary button-shadow"
                href={buttonLink}
              >
                {buttonText}
              </a>
            </p>
          </div>

          <div className="hero-illustration" />
        </div>
      </div>
    </section>
  );
}
