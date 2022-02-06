import '../styles/scss/main.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import type { AppProps } from 'next/app';
import Wrapper from 'components/App';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
};

export default App;