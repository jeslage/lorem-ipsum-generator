import React from "react";
import PropTypes from "prop-types";

import GlobalStyle from "../../styles/global";

import SettingsProvider from "../../contexts/settingsProvider";
import TextProvider from "../../contexts/textProvider";

import Settings from "../settings/settings";
import Text from "../text/text";

const Page = ({ queryConfig }) => {
  return (
    <SettingsProvider queryConfig={queryConfig}>
      <TextProvider>
        <>
          <main>
            <Text />
            <Settings />
          </main>
          <GlobalStyle />
        </>
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
