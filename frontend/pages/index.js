import React from "react";
import Head from "next/head";
import { Base64 } from "js-base64";
import nextCookie from "next-cookies";

import { ToastProvider } from "react-toast-notifications";

import GlobalStyle from "../styles/global";

import SettingsProvider from "../contexts/settingsProvider";
import TextProvider from "../contexts/textProvider";
import PresetsProvider from "../contexts/presetsProvider";

import Settings from "../components/organisms/settings/settings";
import Text from "../components/molecules/text/text";
import Toast from "../components/atoms/toast/toast";

const IndexPage = ({ queryConfig, presets }) => {
  return (
    <SettingsProvider queryConfig={queryConfig}>
      <TextProvider>
        <PresetsProvider initialPresets={presets}>
          <ToastProvider
            autoDismissTimeout={2000}
            placement="bottom-center"
            components={{ Toast: Toast }}
          >
            <>
              <Head>
                <title>Lorem Ipsum Generator</title>
              </Head>
              <main>
                <Text />
                <Settings />
              </main>
              <GlobalStyle />
            </>
          </ToastProvider>
        </PresetsProvider>
      </TextProvider>
    </SettingsProvider>
  );
};

IndexPage.getInitialProps = async ctx => {
  const { presets } = nextCookie(ctx);

  const { query } = ctx;

  let config = {};

  if (query.c) {
    config = JSON.parse(Base64.decode(query.c));
  }

  return { queryConfig: config, presets };
};

export default IndexPage;
