import "../styles/globals.css";
import "../styles/style-prefix.css";
import "../styles/style.css";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
