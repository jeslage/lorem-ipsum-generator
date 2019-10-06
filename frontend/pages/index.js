import React from "react";
import { Base64 } from "js-base64";
import nextCookie from "next-cookies";
import { ToastProvider } from "react-toast-notifications";
import { DndProvider } from "react-dnd-cjs";
import HTML5Backend from "react-dnd-html5-backend-cjs";

import { decode64 } from "../helper";

import { withApollo } from "../graphql/apollo";

import GlobalStyle from "../styles/global";

import SettingsProvider from "../contexts/settingsProvider";
import TextProvider from "../contexts/textProvider";
import PresetsProvider from "../contexts/presetsProvider";
import HistoryProvider from "../contexts/historyProvider";

import Toast from "../components/atoms/toast/toast";
import Home from "../components/pages/home/home";

const IndexPage = ({ queryConfig, presets }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <HistoryProvider>
        <SettingsProvider queryConfig={queryConfig}>
          <TextProvider>
            <PresetsProvider initialPresets={presets}>
              <ToastProvider
                autoDismissTimeout={2000}
                placement="bottom-center"
                components={{ Toast: Toast }}
              >
                <>
                  <Home />
                  <GlobalStyle />
                </>
              </ToastProvider>
            </PresetsProvider>
          </TextProvider>
        </SettingsProvider>
      </HistoryProvider>
    </DndProvider>
  );
};

IndexPage.getInitialProps = async ctx => {
  const { presets } = nextCookie(ctx);

  const { query } = ctx;

  let config = {};

  if (query.c) {
    config = decode64(query.c);
  }

  return { queryConfig: config, presets };
};

export default withApollo(IndexPage);
