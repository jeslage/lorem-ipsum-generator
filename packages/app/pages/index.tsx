import React from "react";
import { NextPage, NextPageContext } from "next";
import cookies from "next-cookies";
import Head from "next/head";
import styled from "styled-components";

import { withAuthSync } from "../helper/auth";

import withApollo from "../graphql/with-apollo";
import GlobalStyle from "../styles/global";

import { mq } from "../styles";

import { PresetsProvider } from "../contexts";

import Text from "../components/Text";
import Sidebar from "../components/Sidebar";

type IndexPageProps = {
  presets?: string;
  likedPresets?: string;
};

const StyledHome = styled.main`
  background: ${props => props.theme.backgroundColor};

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

const IndexPage: NextPage<IndexPageProps> = ({ presets, likedPresets }) => (
  <PresetsProvider initialPresets={presets} initialLikedPresets={likedPresets}>
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
  </PresetsProvider>
);

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
  const { presets, likedPresets } = cookies(ctx);

  return { presets, likedPresets };
};

export default withApollo(withAuthSync(IndexPage));
