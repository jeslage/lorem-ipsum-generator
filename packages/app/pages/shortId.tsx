import {
  PresetQueryResult,
  PresetDocument
} from "../graphql/queries/preset.graphql";

import withApollo, { WithApolloPageContext } from "../graphql/with-apollo";
import { redirect } from "../helper";

const ShortIdPage = () => <p>This link is invalid...</p>;

ShortIdPage.getInitialProps = async (ctx: WithApolloPageContext) => {
  const { data }: Partial<PresetQueryResult> = await ctx.apolloClient.query({
    query: PresetDocument,
    variables: { shortId: ctx.query.shortId }
  });

  if (data?.preset?.settings) {
    return redirect(ctx, `/?c=${data?.preset?.settings}`);
  }

  return null;
};

export default withApollo(ShortIdPage);
