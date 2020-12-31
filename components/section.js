import Clients from "./clients";
import FAQ from "./faq";
import Features from "./features";
import Hero from "./hero";
import Pricing from "./pricing";
import Testimonials from "./testimonials";

export default function Section({ type, fields }) {
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
        subheadline={fields.sub_headline}
        features={fields.features}
      />
    );
  }

  if (type === "testimonials") {
    return (
      <Testimonials
        headline={fields.headline}
        testimonials={fields.testimonials}
        animated={true}
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
