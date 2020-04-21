import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import * as clipboard from "clipboard-polyfill";
import getConfig from "next/config";

import { encodeConfig, decodeConfig } from "../../helper";
import { sortBy } from "./helper/sortBy";

import { useAddPresetMutation } from "../../graphql/mutations/createPreset.graphql";

import { SettingsContext, PresetsContext, TextContext } from "../../contexts";

import Button from "../Button";
import Preset from "../Preset";
import Select from "../Select";
import { PresetOptionsType } from "../Preset/Preset";

import StyledFeaturedList from "./FeaturedList.style";

const { publicRuntimeConfig } = getConfig();

const FeaturedList = () => {
  const { addToast } = useToasts();

  const { settings, updateAllSettings } = useContext(SettingsContext);
  const { texts } = useContext(TextContext);
  const {
    featuredPresets,
    likedPresets,
    likePreset,
    unlikePreset,
    addPreset
  } = useContext(PresetsContext);

  const [sorted, setSorted] = useState<string>("asc");
  const [filter, setFilter] = useState({
    textType: "all"
  });

  const { textType } = settings;

  const [addPresetMutation] = useAddPresetMutation();

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

    return presetOptions;
  };

  const filteredPresets = featuredPresets
    ? featuredPresets.sort(sortBy(sorted)).filter(item => {
        if (filter.textType !== "all") {
          return item.textType === filter.textType;
        }

        return true;
      })
    : [];

  return (
    <StyledFeaturedList>
      <div className="featuredList__presets">
        {featuredPresets && featuredPresets.length > 0 ? (
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
            <Select
              label="Text type:"
              initialValue={filter.textType}
              onChange={val => setFilter(prev => ({ ...prev, textType: val }))}
              name="textType"
              options={[
                { label: "All", value: "all" },
                ...Object.keys(texts).map(key => ({
                  label: texts[key].label,
                  value: key
                })),
                { label: "Custom", value: "custom" }
              ]}
            />

            {filteredPresets.length > 0 ? (
              filteredPresets.map(item => (
                <Preset
                  className="featuredList__preset"
                  settings={item.settings}
                  key={item.id}
                  likes={item.likes}
                  options={getOptions(item)}
                  additionalOptions={[
                    {
                      label: "Add to presets",
                      callback: () => {
                        addPreset(item.settings);
                        addToast("Successfully added to own presets", {
                          appearance: "success",
                          autoDismiss: true
                        });
                      }
                    },
                    {
                      label: "Copy share link",
                      callback: () => {
                        clipboard.writeText(
                          `${publicRuntimeConfig.ROOT_URL}preset/${item.shortId}`
                        );
                        addToast("Share link copied successfully", {
                          appearance: "success",
                          autoDismiss: true
                        });
                      }
                    }
                  ]}
                  onClick={() => {
                    addToast("Settings updated", {
                      appearance: "success",
                      autoDismiss: true
                    });
                    updateAllSettings(decodeConfig(item.settings));
                  }}
                />
              ))
            ) : (
              <p>No presets</p>
            )}
          </>
        ) : (
          <p className="featuredList__no-presets">No featured presets!</p>
        )}
      </div>

      <div className="featuredList__bar">
        <Button
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
          Submit your current preset
        </Button>
      </div>
    </StyledFeaturedList>
  );
};

export default FeaturedList;
