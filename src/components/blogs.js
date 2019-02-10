import React from "react";
import PropTypes from "prop-types";

function Blogs({ data }) {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-inner section-inner">
          <div className="testimonials-header text-center text-light">
            <h2 className="section-title mt-0">{data.fields.title}</h2>
          </div>
          <div className="testimonials-wrap">
            {data.fields.blogs.map((blog, index) => {
              return (
                <div className="testimonial text-sm " key={index}>
                  <div className="testimonial-inner">
                    <div className="testimonial-main">
                      <div className="testimonial-body">
                        <p>{blog.body}</p>
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-name">
                        <a href="#">{blog.author}</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Blogs.propTypes = {
  data: PropTypes.object.isRequired
};

export default Blogs;
