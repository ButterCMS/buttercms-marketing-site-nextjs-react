import React from "react";
import PropTypes from "prop-types";

import Hero from "./hero";
import Clients, { ClientsPropTypes } from "./clients";
import Features, { FeaturesPropTypes } from "./features";
import Pricing, { PricingPropTypes } from "./pricing";
import Testimonials, { TestimonialsPropTypes } from "./testimonials";
import FAQ, { FAQPropTypes } from "./faq";

export const SectionPropTypes = {
  type: PropTypes.string.isRequired,
  fields: PropTypes.oneOfType([
    // Hero section
    PropTypes.exact({
      headline: PropTypes.string,
      sub_headline: PropTypes.string,
      cta_button_text: PropTypes.string,
      cta_button_link: PropTypes.string,
    }),
    PropTypes.exact(ClientsPropTypes),
    PropTypes.exact(FeaturesPropTypes),
    PropTypes.exact(PricingPropTypes),
    PropTypes.exact(TestimonialsPropTypes),
    PropTypes.exact(FAQPropTypes),
  ]),
};

function Section({ type, fields }) {
  if (type === "hero") {
    return (
      <Hero
        headline={fields.headline}
        subheadline={fields.sub_headline}
        buttonText={fields.cta_button_text}
        buttonLink={fields.cta_button_link}
      />
    );
  }

  if (type === "clients") {
    return <Clients clients={fields.clients} />;
  }

  if (type === "features") {
    return (
      <Features
        headline={fields.headline}
        subheadline={fields.subheadline}
        features={fields.features}
      />
    );
  }

  if (type === "testimonials") {
    return (
      <Testimonials
        headline={fields.headline}
        testimonials={fields.testimonials}
      />
    );
  }

  if (type === "pricing") {
    return <Pricing headline={fields.headline} pricing={fields.pricing} />;
  }

  if (type === "faqs") {
    return <FAQ headline={fields.headline} questions={fields.questions} />;
  }

  return "";
}

Section.propTypes = SectionPropTypes;

export default Section;
