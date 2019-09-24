import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import GlobalStyle from "../../styles/global";

import SettingsProvider from "../../contexts/settingsProvider";
import TextProvider from "../../contexts/textProvider";

import Settings from "../settings/settings";
import Text from "../text/text";
import PresetsProvider from "../../contexts/presetsProvider";

const Page = ({ queryConfig }) => {
  return (
    <SettingsProvider queryConfig={queryConfig}>
      <TextProvider>
        <PresetsProvider>
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
