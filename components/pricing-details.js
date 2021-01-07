import React from "react";

export default function PricingDetails({
    headline,
    price,
    features,
    buttonLink,
    buttonText,
}) {
    React.useEffect(() => {
        const sr = ScrollReveal();
        sr.reveal(".pricing-table", {
            duration: 600,
            distance: "40px",
            easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            interval: 100,
            origin: "bottom",
            viewFactor: 0.2,
        });
    });

    return (
        <div className="pricing-table">
            <div className="pricing-table-inner">
                <div className="pricing-table-main">
                    <div className="pricing-table-header mb-24 pb-24">
                        <div className="pricing-table-title h4 mt-0 mb-16">
                            {headline}
                        </div>

                        <div className="pricing-table-price">
                            <span className="pricing-table-price-currency">
                                $
                            </span>
                            <span className="pricing-table-price-amount h1">
                                {price}
                            </span>
                            /m
                        </div>
                    </div>

                    {features && features.length && (
                        <ul className="pricing-table-features list-reset text-xs">
                            {features.map(({ description }, key) => (
                                <li key={key}>{description}</li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="pricing-table-cta">
                    <a
                        className="button button-secondary button-shadow button-block"
                        href={buttonLink}
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
}
