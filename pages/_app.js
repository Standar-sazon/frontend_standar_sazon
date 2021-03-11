import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles/app.scss'

config.autoAddCss = false
function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
