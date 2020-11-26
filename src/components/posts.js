import React from "react";
import PropTypes from "prop-types";

import Post, { PostPropTypes } from "./post";

export const PostsPropTypes = {
  posts: PropTypes.arrayOf(PropTypes.exact(PostPropTypes)),
};

function Posts({ posts }) {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials-inner section-inner">
          <div className="testimonials-header text-center text-light">
            <h1 className="section-title mt-0">Blog posts</h1>
          </div>
          <div className="testimonials-wrap">
            {posts.map(({ body, author }, index) => {
              return <Post key={index} body={body} author={author}></Post>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Posts.propTypes = PostsPropTypes;

export default Posts;
