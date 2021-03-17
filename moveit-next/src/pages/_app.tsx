import '../styles/global.css';

/***
 * Semelhante ao App.module do angular
 */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
