import Document, { Head, Html, Main, NextScript } from "next/document";

import Favicon from "@/images/favicon.ico";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/x-icon" href={Favicon} />
                    <link
                        href="https://fonts.googleapis.com/css?family=Oxygen:400,700|Arimo:400,700"
                        rel="stylesheet"
                    />
                    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" />
                </Head>

                <body className="is-boxed has-animations">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
