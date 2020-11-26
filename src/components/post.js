import React from "react";
import PropTypes from "prop-types";

function createMarkup(html) {
  return { __html: html };
}

export const PostPropTypes = {
  body: PropTypes.string,
  author: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }),
};

function Post({ body, author }) {
  return (
    <div className="testimonial text-sm">
      <div className="testimonial-inner">
        <div className="testimonial-main">
          <div className="testimonial-body">
            <div dangerouslySetInnerHTML={createMarkup(body)} />
          </div>
        </div>
        <div className="testimonial-footer">
          <div className="testimonial-name">
            <a href="#">
              {author.first_name} {author.last_name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = PostPropTypes;

export default Post;
