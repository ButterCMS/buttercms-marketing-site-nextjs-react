import Document, { Head, Main, NextScript } from "next/document";

import Favicon from "../assets/images/favicon.ico";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
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
      </html>
    );
  }
}
