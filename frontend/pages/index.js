import React from "react";
import { Base64 } from "js-base64";

import GlobalStyle from "../styles/global";

import SettingsProvider from "../contexts/settingsProvider";
import TextProvider from "../contexts/textProvider";

import Settings from "../components/settings/settings";
import Text from "../components/text/text";

const IndexPage = ({ queryConfig }) => {
  return (
    <SettingsProvider queryConfig={queryConfig}>
      <TextProvider>
        <>
          <div style={{ display: "flex" }}>
            <Text />
            <Settings />
          </div>
          <GlobalStyle />
        </>
      </TextProvider>
    </SettingsProvider>
  );
};

IndexPage.getInitialProps = async ({ query }) => {
  let config = {};

  if (query.config) {
    config = JSON.parse(Base64.decode(query.config));
  }

  console.log(typeof config);

  return { queryConfig: config };
};

export default IndexPage;
