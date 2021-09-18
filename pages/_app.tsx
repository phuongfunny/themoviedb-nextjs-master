import "../styles/globals.scss";
import "../styles/style-page/header.scss";
import "../styles/style-page/movies.scss";
import "../styles/style-page/movie-detail.scss";
import "../styles/style-page/filter.scss";
import "../styles/style-page/modal-video.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts";
import { Provider } from "react-redux";
import { store } from "../app/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};
export default MyApp;
