import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import * as clipboard from "clipboard-polyfill";

import { encodeConfig, decodeConfig } from "../../helper";
import { sortBy } from "./helper/sortBy";

import { usePresetsQuery } from "../../graphql/queries/presets.graphql";
import { useAddPresetMutation } from "../../graphql/mutations/createPreset.graphql";
import { usePublishPresetMutation } from "../../graphql/mutations/publishPreset.graphql";

import { SettingsContext, PresetsContext } from "../../contexts";

import Button from "../Button";
import LoadingIndicator from "../LoadingIndicator";
import Preset from "../Preset";
import Select from "../Select";
import { PresetOptionsType } from "../Preset/Preset";

import StyledFeaturedList from "./FeaturedList.style";

const FeaturedList = () => {
  const { addToast } = useToasts();
  const { settings, updateAllSettings } = useContext(SettingsContext);
  const { likedPresets, likePreset, unlikePreset } = useContext(PresetsContext);
  const [sorted, setSorted] = useState<string>("asc");

  const { textType } = settings;

  const { data, loading, error } = usePresetsQuery({
    variables: { published: true }
  });
  const [addPresetMutation] = useAddPresetMutation();
  const [publishPresetMutation] = usePublishPresetMutation();

  const getOptions = item => {
    const liked = likedPresets.includes(item.id);

    const presetOptions: PresetOptionsType[] = [
      {
        label: liked ? "Unlike preset" : "Like preset",
        icon: liked ? "heart" : "heartOutline",
        callback: () => {
          liked
            ? unlikePreset(item.id, item.likes)
            : likePreset(item.id, item.likes);
        }
      }
    ];

    if (!item.published) {
      presetOptions.push({
        label: "Publish preset",
        icon: "plus",
        callback: () => {
          publishPresetMutation({ variables: { id: item.id } });
        }
      });
    }

    if (item.shortId) {
      presetOptions.push({
        label: "Share preset",
        icon: "copy",
        callback: () => {
          clipboard.writeText(`http://localhost:3000/${item.shortId}`);
        }
      });
    }

    return presetOptions;
  };

  return (
    <StyledFeaturedList>
      <div className="featuredList__presets">
        {loading && <LoadingIndicator />}
        {error && <p>Sorry, something went wrong...</p>}

        {!loading && !error && data && data.presets.length > 0 ? (
          <>
            <Select
              label="Sort by:"
              initialValue={sorted}
              onChange={val => setSorted(val)}
              name="sortBy"
              options={[
                { label: "Newest first", value: "asc" },
                { label: "Oldest first", value: "desc" },
                { label: "Most liked", value: "mostLiked" },
                { label: "Least liked", value: "leastLiked" }
              ]}
            />

            {data.presets.sort(sortBy(sorted)).map(item => (
              <Preset
                className="featuredList__preset"
                settings={item.settings}
                dateCreated={parseFloat(item.dateCreated)}
                key={item.id}
                likes={item.likes}
                options={getOptions(item)}
                onClick={() => {
                  addToast("Settings updated", {
                    appearance: "success",
                    autoDismiss: true
                  });
                  updateAllSettings(decodeConfig(item.settings));
                }}
              />
            ))}
          </>
        ) : (
          <p className="featuredList__no-presets">No featured presets!</p>
        )}
      </div>

      <div className="featuredList__bar">
        <Button
          disabled={loading || Boolean(error)}
          onClick={() => {
            try {
              addPresetMutation({
                variables: {
                  textType,
                  settings: encodeConfig(settings)
                }
              });

              addToast("Thanks for submitting your preset.", {
                appearance: "success",
                autoDismiss: true
              });
            } catch (err) {
              addToast("Sorry, something went wrong, try again later", {
                appearance: "error",
                autoDismiss: true
              });
            }
          }}
          iconBefore="plus"
        >
          {loading ? "Loading presets" : "Submit your current preset"}
        </Button>
      </div>
    </StyledFeaturedList>
  );
};

export default FeaturedList;
