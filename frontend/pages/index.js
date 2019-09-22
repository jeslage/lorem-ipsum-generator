import React from "react";
import { Base64 } from "js-base64";

import Page from "../components/page/page";

const IndexPage = ({ queryConfig }) => {
  return <Page queryConfig={queryConfig} />;
};

IndexPage.getInitialProps = async ({ query }) => {
  let config = {};

  if (query.c) {
    config = JSON.parse(Base64.decode(query.c));
  }

  return { queryConfig: config };
};

export default IndexPage;
