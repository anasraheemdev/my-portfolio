import { Head, Html, Main, NextScript } from "next/document";

/**
 * Next.js sometimes attempts to resolve `/_document` during build tooling checks.
 * Providing this file prevents Windows builds from failing with PageNotFoundError
 * when the project primarily uses the App Router.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

