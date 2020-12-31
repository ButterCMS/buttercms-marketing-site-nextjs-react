export default function Testimonial({ body, author }) {
  return (
    <div className="testimonial text-sm">
      <div className="testimonial-inner">
        <div className="testimonial-main">
          <div
            className="testimonial-body"
            dangerouslySetInnerHTML={{ __html: body }}
          ></div>
        </div>

        <div className="testimonial-footer">
          <div className="testimonial-name">
            <a href="#">@{author}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
