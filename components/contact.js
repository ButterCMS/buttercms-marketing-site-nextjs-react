export default function Contact({ description, buttonLink, buttonText }) {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-inner section-inner ">
          <h3
            className="section-title mt-0"
            dangerouslySetInnerHTML={{ __html: description }}
          ></h3>

          <div className="cta-cta">
            <a
              className="button button-primary button-shadow"
              href={buttonLink}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
