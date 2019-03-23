import React from "react";
import PropTypes from "prop-types";

function createMarkup(html) {
  return { __html: html };
}

function Blogs({ data }) {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-inner section-inner">
          <div className="testimonials-header text-center text-light">
            <h2 className="section-title mt-0">Blogs</h2>
          </div>
          <div className="testimonials-wrap">
            {data.map((blog, index) => {
              return (
                <div className="testimonial text-sm " key={index}>
                  <div className="testimonial-inner">
                    <div className="testimonial-main">
                      <div className="testimonial-body">
                        <div
                          dangerouslySetInnerHTML={createMarkup(blog.body)}
                        />
                      </div>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-name">
                        <a href="#">
                          {blog.author.first_name} {blog.author.last_name}
                        </a>
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
  data: PropTypes.array.isRequired
};

export default Blogs;
