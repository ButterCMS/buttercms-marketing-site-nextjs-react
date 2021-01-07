import React from "react";

import Router from "next/router";
import Image from "next/image";

import "@/styles/style.css";

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const showLoader = () => {
            setLoading(true);
        };

        const removeLoader = () => {
            setLoading(false);
        };

        Router.events.on("routeChangeStart", showLoader);
        Router.events.on("routeChangeComplete", removeLoader);
        Router.events.on("routeChangeError", removeLoader);

        return () => {
            Router.events.off("routeChangeStart", showLoader);
            Router.events.off("routeChangeComplete", removeLoader);
            Router.events.off("routeChangeError", removeLoader);
        };
    }, []);

    return (
        <div className="body-wrap boxed-container">
            <main>
                {loading ? (
                    <div
                        className="loader"
                        style={{
                            margin: "0 auto",
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "14px",
                            height: "100vh",
                        }}
                    >
                        <Image
                            src="/images/loader.svg"
                            height={50}
                            width={50}
                        />
                    </div>
                ) : (
                    <Component {...pageProps} />
                )}
            </main>
        </div>
    );
}
