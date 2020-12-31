import React from "react";

import Question from "./question";

export default function FAQ({ headline, questions }) {
  React.useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".pricing-faqs", {
      duration: 600,
      distance: "40px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      interval: 100,
      origin: "bottom",
      viewFactor: 0.2,
    });
  });

  return (
    <section className="pricing section has-animations">
      <div className="container">
        <div className="pricing-inner section-inner">
          <div className="pricing-faqs container-sm ">
            <h4 className="mt-40 mb-32">{headline}</h4>

            <ul className="accordion">
              {questions.map(({ question, answer }, index) => (
                <li key={index}>
                  <Question question={question} answer={answer}></Question>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
