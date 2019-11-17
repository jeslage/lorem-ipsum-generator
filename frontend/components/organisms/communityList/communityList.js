import React, { useContext } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useToasts } from "react-toast-notifications";

import { decodeConfig } from "../../../helper";

import ALL_PRESETS from "../../../graphql/queries/allPresets.graphql";
import CREATE_PRESET from "../../../graphql/mutations/addPreset.graphql";
import DELETE_PRESET from "../../../graphql/mutations/deletePreset.graphql";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Button from "../../atoms/button/button";
import LoadingIndicator from "../../atoms/loadingIndicator/loadingIndicator";
import Preset from "../../molecules/preset/preset";

import CopyIcon from "../../icons/copy.svg";
import StyledCommunityList from "./communityList.style";

const CommunityList = () => {
  const { addToast } = useToasts();
  const { settings, updateAllSettings } = useContext(SettingsContext);

  const { textType } = settings;

  const { data, loading, error } = useQuery(ALL_PRESETS);
  const [addNewPreset] = useMutation(CREATE_PRESET);
  const [removeBackendPreset] = useMutation(DELETE_PRESET);

  return (
    <StyledCommunityList>
      <div className="communityList__presets">
        {loading && <LoadingIndicator />}
        {error && <p>Error</p>}

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
                    updateAllSettings(JSON.parse(Base64.decode(item.settings)));
                  }}
                  onRemove={() => {
                    addToast("Preset removed successfully", {
                      appearance: "success",
                      autoDismiss: true
                    });
                    removeBackendPreset({ variables: { id: item.id } });
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
          disabled={loading || error}
          onClick={() =>
            addNewPreset({
              variables: {
                name: "Preset 1",
                description: "Das ist eine Beschreibung",
                dateCreated: Date.now().toString(),
                textType,
                settings: Base64.encode(JSON.stringify(settings))
              }
            })
          }
          iconBefore={CopyIcon}
        >
          {loading ? "Loading preset" : "Add another preset"}
        </Button>
      </div>
    </StyledCommunityList>
  );
};

export default CommunityList;
