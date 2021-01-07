import Post from "./post";

export default function Posts({ posts }) {
    return (
        <section className="testimonials section">
            <div className="container">
                <div className="testimonials-inner section-inner">
                    <div className="testimonials-header text-center text-light">
                        <h1 className="section-title mt-0">Blog</h1>
                    </div>

                    <div className="testimonials-wrap">
                        {posts.map(({ body, author }, index) => (
                            <Post
                                key={index}
                                body={body}
                                author={author}
                            ></Post>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
