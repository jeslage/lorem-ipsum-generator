import React from "react";
import { NextPage, NextPageContext } from "next";
import cookies from "next-cookies";
import { ToastProvider } from "react-toast-notifications";
import { DndProvider } from "react-dnd-cjs";
import HTML5Backend from "react-dnd-html5-backend-cjs";
import Head from "next/head";
import styled from "styled-components";

import { decodeConfig } from "../helper";

import withApollo from "../graphql/with-apollo";
import GlobalStyle from "../styles/global";

import { mq } from "../styles/tools";

import {
  SettingsProvider,
  TextProvider,
  PresetsProvider,
  HistoryProvider
} from "../contexts";

import Toast from "../components/Toast";
import Text from "../components/Text";
import Sidebar from "../components/Sidebar";

type IndexPageProps = {
  queryConfig?: any;
  presets?: string;
};

const StyledHome = styled.main`
  ${mq("m")} {
    display: flex;
  }

  .home__text {
    flex-grow: 2;
  }

  .home__sidebar {
    flex-shrink: 0;
  }
`;

const IndexPage: NextPage<IndexPageProps> = ({ queryConfig, presets }) => (
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
                <Head>
                  <title>Lorem Ipsum Generator</title>
                </Head>
                <StyledHome>
                  <Text className="home__text" />
                  <Sidebar className="home__sidebar" />
                </StyledHome>
                <GlobalStyle />
              </>
            </ToastProvider>
          </PresetsProvider>
        </TextProvider>
      </SettingsProvider>
    </HistoryProvider>
  </DndProvider>
);

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const { presets } = cookies(ctx);

  const { query } = ctx;

  let config = {};

  if (query.c) {
    config = decodeConfig(query.c);
  }

  return { queryConfig: config, presets };
};

export default withApollo(IndexPage);
