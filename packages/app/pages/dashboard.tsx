import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

import getConfig from "next/config";

import { withAuthSync, logout } from "../helper/auth";
import withApollo from "../graphql/with-apollo";

import { usePresetsQuery } from "../graphql/queries/presets.graphql";
import { usePublishPresetMutation } from "../graphql/mutations/publishPreset.graphql";
import { useUnpublishPresetMutation } from "../graphql/mutations/unpublishPreset.graphql";
import { useDeletePresetMutation } from "../graphql/mutations/deletePreset.graphql";

import Preset from "../components/Preset";
import Button from "../components/Button";

const { publicRuntimeConfig } = getConfig();

const StyledDashboard = styled.div`
  padding: 20px;

  .dashboard__options {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;

    button {
      width: auto;
    }
  }

  .dashboard__presets {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 20px;
    align-items: stretch;
  }

  .dashboard__preset {
    grid-column-end: span 3;
    margin: 0;
    height: 100%;
  }
`;

const DashboardPage: NextPage = () => {
  const { data, refetch } = usePresetsQuery();
  const [publishPresetMutation] = usePublishPresetMutation();
  const [unpublishPresetMutation] = useUnpublishPresetMutation();
  const [deletePresetMutation] = useDeletePresetMutation();

  const unpublishedPresets = data?.presets.filter(item => !item.published);
  const publishedPresets = data?.presets.filter(item => item.published);

  const handleClick = item => {
    if (typeof window !== "undefined") {
      const win = window.open(
        `${publicRuntimeConfig.ROOT_URL}preset/${item.shortId ||
          `?c=${item.settings}`}`,
        "_blank"
      );

      win?.focus();
    }
  };

  return (
    <StyledDashboard>
      <div className="dashboard__options">
        <Button onClick={() => logout()}>Logout</Button>
      </div>

      <p>Published</p>
      <div className="dashboard__presets">
        {publishedPresets &&
          publishedPresets.length > 0 &&
          publishedPresets.map(item => (
            <Preset
              key={item.id}
              className="dashboard__preset"
              settings={item.settings}
              dateCreated={parseFloat(item.dateCreated)}
              likes={item.likes}
              onClick={() => handleClick(item)}
              options={[
                {
                  label: "Delete",
                  icon: "remove",
                  callback: async () => {
                    await deletePresetMutation({
                      variables: { id: item.id }
                    });
                    refetch();
                  }
                },
                {
                  label: "Unpublish",
                  icon: "minus",
                  callback: async () => {
                    await unpublishPresetMutation({
                      variables: { id: item.id }
                    });
                    refetch();
                  }
                }
              ]}
            />
          ))}
      </div>

      <p>Unpublished</p>
      <div className="dashboard__presets">
        {unpublishedPresets &&
          unpublishedPresets.length > 0 &&
          unpublishedPresets.map(item => (
            <Preset
              key={item.id}
              className="dashboard__preset"
              settings={item.settings}
              dateCreated={parseFloat(item.dateCreated)}
              likes={item.likes}
              onClick={() => handleClick(item)}
              options={[
                {
                  label: "Publish",
                  icon: "plus",
                  callback: async () => {
                    await publishPresetMutation({
                      variables: { id: item.id }
                    });

                    refetch();
                  }
                }
              ]}
            />
          ))}
      </div>
    </StyledDashboard>
  );
};

export default withApollo(withAuthSync(DashboardPage));
