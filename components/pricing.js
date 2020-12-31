import PricingDetails from "./pricing-details";

export default function Pricing({ headline, pricing }) {
  return (
    <section className="pricing section">
      <div className="container">
        <div className="pricing-inner section-inner">
          <h2 className="section-title mt-0 text-center">{headline}</h2>

          <div>
            <div className="pricing-tables-wrap">
              {pricing.map(
                (
                  {
                    headline,
                    price,
                    features,
                    button_link: buttonLink,
                    button_text: buttonText,
                  },
                  index
                ) => {
                  return (
                    <PricingDetails
                      key={index}
                      headline={headline}
                      price={price}
                      features={features}
                      buttonLink={buttonLink}
                      buttonText={buttonText}
                    ></PricingDetails>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
