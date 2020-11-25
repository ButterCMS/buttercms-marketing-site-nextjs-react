import React from "react";
import PropTypes from "prop-types";

export const QuestionPropTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

function Question({ question, answer }) {
  return (
    <>
      <div className="accordion-title">
        <span>{question}</span>
        <div className="accordion-icon" />
      </div>
      <div className="accordion-body">
        <p>{answer}</p>
      </div>
    </>
  );
}

Question.propTypes = QuestionPropTypes;

export default Question;
