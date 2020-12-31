import React from "react";

export default function Testimonial({ body, author, animated }) {
    React.useEffect(() => {
        if (!animated) {
            return;
        }

        const sr = ScrollReveal();
        sr.reveal(".testimonial", {
            duration: 600,
            distance: "40px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            interval: 100,
            origin: "bottom",
            viewFactor: 0.2,
        });
    });

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
