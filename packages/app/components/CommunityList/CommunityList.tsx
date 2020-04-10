import React, { useContext } from "react";
import { useToasts } from "react-toast-notifications";

import { encodeConfig, decodeConfig } from "../../helper";

import { usePresetsQuery } from "../../graphql/queries/presets.graphql";
import { useAddPresetMutation } from "../../graphql/mutations/createPreset.graphql";
import { useDeletePresetMutation } from "../../graphql/mutations/deletePreset.graphql";

import { SettingsContext } from "../../contexts/SettingsProvider";

import Button from "../Button";
import LoadingIndicator from "../LoadingIndicator";
import Preset from "../Preset";

import StyledCommunityList from "./CommunityList.style";

const CommunityList = () => {
  const { addToast } = useToasts();
  const { settings, updateAllSettings } = useContext(SettingsContext);

  const { textType } = settings;

  const { data, loading, error } = usePresetsQuery();
  const [addPresetMutation] = useAddPresetMutation();
  const [deletePresetMutation] = useDeletePresetMutation();

  console.log(data);
  return (
    <StyledCommunityList>
      <div className="communityList__presets">
        {loading && <LoadingIndicator />}
        {error && <pre>{JSON.stringify(error, null, 2)}</pre>}

        {!loading && !error && (
          <>
            {data && data.presets.length > 0 ? (
              data.presets.map(item => (
                <Preset
                  className="communityList__preset"
                  settings={decodeConfig(item.settings)}
                  dateCreated={parseFloat(item.dateCreated)}
                  key={item.id}
                  likes={item.likes}
                  onDrop={() => {
                    addToast("Settings updated", {
                      appearance: "success",
                      autoDismiss: true
                    });
                    updateAllSettings(decodeConfig(item.settings));
                  }}
                  onRemove={() => {
                    addToast("Preset removed successfully", {
                      appearance: "success",
                      autoDismiss: true
                    });
                    deletePresetMutation({ variables: { id: item.id } });
                  }}
                />
              ))
            ) : (
              <p className="communityList__no-presets">No featured presets!</p>
            )}
          </>
        )}
      </div>

      <div className="communityList__bar">
        <Button
          disabled={loading || Boolean(error)}
          onClick={() =>
            addPresetMutation({
              variables: {
                name: "Preset 1",
                description: "Das ist eine Beschreibung",
                textType,
                settings: encodeConfig(settings)
              }
            })
          }
          iconBefore="copy"
        >
          {loading ? "Loading preset" : "Add another preset"}
        </Button>
      </div>
    </StyledCommunityList>
  );
};

export default CommunityList;
