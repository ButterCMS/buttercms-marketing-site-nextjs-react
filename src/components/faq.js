import React from "react";
import PropTypes from "prop-types";

import Question, { QuestionPropTypes } from "./question";

export const FAQPropTypes = {
  headline: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.exact(QuestionPropTypes)),
};

function FAQ({ headline, questions }) {
  return (
    <section className="pricing section has-animations">
      <div className="container">
        <div className="pricing-inner section-inner">
          <div className="pricing-faqs container-sm ">
            <h4 className="mt-40 mb-32">{headline}</h4>
            <ul className="accordion">
              {questions.map(({ question, answer }, index) => {
                return (
                  <li key={index}>
                    <Question question={question} answer={answer}></Question>
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

FAQ.propTypes = FAQPropTypes;
export default FAQ;
