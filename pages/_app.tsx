/* eslint-disable react/jsx-props-no-spreading */
import "../styles/scss/main.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from "next/app";
import Wrapper from "components/App";
import Meta from "components/Utilities/Meta";
import { Provider } from "react-redux";
import store from "../redux/store";

// Safe Wrapper

const SafeHydrate: React.FC = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Meta />
      <SafeHydrate>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </SafeHydrate>
    </Provider>
  );
};

export default App;
