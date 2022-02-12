import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

/*
- One of this page roles is to load global CSS files and we cannot import global CSS anywhere else because global CSS affects all elements on the page
- This App component is the top-level component which will be common across all the different pages. We can use this App component to keep state when navigating between pages, for example.
- We need to restart the development server when we add this file
*/