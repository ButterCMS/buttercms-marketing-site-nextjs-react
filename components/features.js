import Feature from "./feature";

export default function Features({ headline, subheadline, features }) {
  return (
    <section className="features section text-center">
      <div className="container">
        <div className="features-inner section-inner has-top-divider">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">{headline}</h2>

              {subheadline && (
                <p className="section-paragraph mb-0">{subheadline}</p>
              )}
            </div>
          </div>
          <div className="features-wrap">
            {features.map((feature, index) => (
              <Feature
                key={index}
                headline={feature.headline}
                subheadline={feature.sub_headline}
                image={feature.image}
              ></Feature>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
