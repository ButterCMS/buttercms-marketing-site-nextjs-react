export default function Post({ body, author }) {
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
                        <a href="#">
                            {author.first_name} {author.last_name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
