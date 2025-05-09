import type { AppProps } from 'next/app';
import '../app/globals.css';
import '../styles/blog.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
