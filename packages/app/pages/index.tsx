import React from "react";
import { NextPage, NextPageContext } from "next";
import cookies from "next-cookies";
import { ToastProvider } from "react-toast-notifications";
import { DndProvider } from "react-dnd-cjs";
import HTML5Backend from "react-dnd-html5-backend-cjs";

import { decodeConfig } from "../helper";
import withApollo from "../graphql/with-apollo";
import GlobalStyle from "../styles/global";

import {
  SettingsProvider,
  TextProvider,
  PresetsProvider,
  HistoryProvider
} from "../contexts";

import Toast from "../components/Toast";
import Home from "../components/pages/home/home";

type IndexPageProps = {
  queryConfig?: any;
  presets?: string;
};

const IndexPage: NextPage<IndexPageProps> = ({ queryConfig, presets }) => {
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

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const { presets } = cookies(ctx);

  const { query } = ctx;

  let config = {};

  if (query.c) {
    config = decodeConfig(query.c);
  }

  console.log(config);
  return { queryConfig: config, presets };
};

export default withApollo(IndexPage);
