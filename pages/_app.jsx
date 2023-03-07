import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Component {...pageProps} />
    </div>
  );
}
