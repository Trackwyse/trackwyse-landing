/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body className="bg-tan">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
