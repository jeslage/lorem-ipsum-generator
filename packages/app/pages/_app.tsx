import App from "next/app";
import { ToastProvider } from "react-toast-notifications";

import { SettingsProvider, TextProvider, HistoryProvider } from "../contexts";

import Toast from "../components/Toast";

import GlobalStyle from "../styles/global";
import { decodeConfig } from "../helper";

function LoremIpsumApp({ Component, queryConfig, pageProps }) {
  return (
    <HistoryProvider>
      <SettingsProvider queryConfig={queryConfig}>
        <TextProvider>
          <ToastProvider
            autoDismissTimeout={2000}
            placement="bottom-center"
            components={{ Toast: Toast }}
          >
            <Component {...pageProps} />
            <GlobalStyle />
          </ToastProvider>
        </TextProvider>
      </SettingsProvider>
    </HistoryProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
LoremIpsumApp.getInitialProps = async appCtx => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appCtx);

  const { query } = appCtx.ctx;

  let config = {};

  if (query.c) {
    config = decodeConfig(query.c);
  }

  return { queryConfig: config, ...appProps };
};

export default LoremIpsumApp;
