import Structure from "@/components/Structure";
import "@/styles/Home.module.css";
import "@/styles/about.css";
import "@/styles/contact.css";
import "@/styles/events.css";
import "@/styles/globals.css";
import "@/styles/open.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Structure children={<Component {...pageProps} />} />;
}
