/*
 * Created on Sun Jan 15 2023
 * Created by JS00001
 *
 * Copyright (c) 2023 Trackwyse
 */

import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider } from "@tanstack/react-query";

import "@/styles/globals.css";
import queryClient from "@/lib/queryClient";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer limit={1} />
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default App;
