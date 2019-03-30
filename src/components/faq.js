import React from "react";
import PropTypes from "prop-types";

function FAQ({ data }) {
  return (
    <section className="pricing section has-animations">
      <div className="container">
        <div className="pricing-inner section-inner">
          <div className="pricing-faqs container-sm ">
            <h4 className="mt-40 mb-32">{data.fields.title}</h4>
            <ul className="accordion">
              {data.fields.faqs.map((faq, index) => {
                return (
                  <li key={index}>
                    <div className="accordion-title">
                      <span>{faq.question}</span>
                      <div className="accordion-icon" />
                    </div>
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

FAQ.propTypes = {
  data: PropTypes.object.isRequired
};

export default FAQ;
