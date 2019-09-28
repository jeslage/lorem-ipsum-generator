import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";

import GlobalStyle from "../../styles/global";

import SettingsProvider from "../../contexts/settingsProvider";
import TextProvider from "../../contexts/textProvider";
import PresetsProvider from "../../contexts/presetsProvider";

import Settings from "../settings/settings";
import Text from "../text/text";
import Toast from "../toast/toast";

const Page = ({ queryConfig }) => {
  return (
    <SettingsProvider queryConfig={queryConfig}>
      <TextProvider>
        <PresetsProvider>
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

Page.propTypes = {
  queryConfig: PropTypes.shape()
};

Page.defaultProps = {
  queryConfig: {}
};

export default Page;
