import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

import { withAuthSync, logout } from "../helper/auth";
import withApollo from "../graphql/with-apollo";

import { usePresetsQuery } from "../graphql/queries/presets.graphql";
import { usePublishPresetMutation } from "../graphql/mutations/publishPreset.graphql";
import { useUnpublishPresetMutation } from "../graphql/mutations/unpublishPreset.graphql";

import Preset from "../components/Preset";

const StyledDashboard = styled.div`
  .dashboard__presets {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 20px;
    align-items: stretch;
    margin: 20px;
  }

  .dashboard__preset {
    grid-column-end: span 3;
    margin: 0;
    height: 100%;
  }
`;

const DashboardPage: NextPage = () => {
  const { data } = usePresetsQuery();
  const [publishPresetMutation] = usePublishPresetMutation();
  const [unpublishPresetMutation] = useUnpublishPresetMutation();

  return (
    <StyledDashboard>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
      <div className="dashboard__presets">
        {data &&
          data.presets.length > 0 &&
          data.presets.map(item => (
            <Preset
              key={item.id}
              className="dashboard__preset"
              settings={item.settings}
              dateCreated={parseFloat(item.dateCreated)}
              options={[
                item.published
                  ? {
                      label: "Unpublish",
                      icon: "minus",
                      callback: () =>
                        unpublishPresetMutation({
                          variables: { id: item.id }
                        })
                    }
                  : {
                      label: "Publish",
                      icon: "plus",
                      callback: () =>
                        publishPresetMutation({
                          variables: { id: item.id }
                        })
                    }
              ]}
            />
          ))}
      </div>
    </StyledDashboard>
  );
};

export default withApollo(withAuthSync(DashboardPage));
