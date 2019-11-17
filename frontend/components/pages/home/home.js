import React from "react";
import Head from "next/head";
import styled from "styled-components";

import Sidebar from "@organisms/sidebar/sidebar";
import Text from "@molecules/text/text";

import { mq } from "@styles/tools";

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

const Home = () => {
  return (
    <>
      <Head>
        <title>Lorem Ipsum Generator</title>
      </Head>
      <StyledHome>
        <Text className="home__text" />
        <Sidebar className="home__sidebar" />
      </StyledHome>
    </>
  );
};

export default Home;
