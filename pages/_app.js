import '../styles/globals.css';
import 'video.js/dist/video-js.css';

// This style imported from below this comment would be responsible for changing the theme of the application
// import './customTheme.scss'
import '@videojs/themes/dist/city/index.css';
import '@videojs/themes/dist/fantasy/index.css';
import '@videojs/themes/dist/forest/index.css';
import '@videojs/themes/dist/sea/index.css';



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
