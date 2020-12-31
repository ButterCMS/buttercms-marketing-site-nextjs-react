import React from "react";

import Client from "./client";

export default function Clients({ clients }) {
    React.useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal(".clients li", {
            delay: 300,
            duration: 1000,
            rotate: {
                y: 50,
            },
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            interval: 150,
        });
    });

    return (
        <section className="clients section">
            <div className="container">
                <div className="clients-inner section-inner has-top-divider">
                    <div className="container-sm">
                        <ul className="list-reset mb-0">
                            {clients.map(({ image, name }, index) => (
                                <li key={index}>
                                    <Client name={name} image={image}></Client>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
