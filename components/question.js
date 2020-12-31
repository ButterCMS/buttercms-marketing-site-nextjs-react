export default function Question({ question, answer }) {
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
