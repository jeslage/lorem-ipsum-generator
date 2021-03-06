import React, { useState, useContext, FC } from "react";

import { SettingsContext } from "../../../../contexts";

import Range from "../../../Range";
import Select from "../../../Select";
import Switch from "../../../Switch";
import Counter from "../../../Counter";
import ColorPicker from "../../../ColorPicker";
import RadioGroup from "../../../RadioGroup";
import Shorthand from "../../../Shorthand";
import Icon from "../../../Icon";

import StyledInlineSettings from "./InlineSettings.style";

export interface InlineSettingsProps {
  type: "list" | "headline" | "paragraph" | "subline";
}

const InlineSettings: FC<InlineSettingsProps> = ({ type, children }) => {
  const [isEntered, setIsEntered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { settings, fontFamilies, updateNestedSettings } = useContext(
    SettingsContext
  );
  return (
    <StyledInlineSettings
      isOpen={isOpen}
      onMouseEnter={() => setIsEntered(true)}
      onMouseLeave={() => {
        setIsEntered(false);
        setIsOpen(false);
      }}
    >
      {isEntered && (
        <div className="inlineSettings__setting">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="inlineSettings__button"
          >
            <Icon type="settings" />
          </button>
          {isOpen && (
            <div className="inlineSettings__content">
              {type === "list" ? (
                <Switch
                  label="Ordered List"
                  isActive={settings.list.orderedList}
                  onChange={bool =>
                    updateNestedSettings("list", "orderedList", bool)
                  }
                />
              ) : (
                <>
                  <Select
                    name="fontFamily"
                    options={fontFamilies}
                    iconBefore="fontFamily"
                    initialValue={settings[type].fontFamily}
                    onChange={value =>
                      updateNestedSettings(type, "fontFamily", value)
                    }
                  />
                  <Range
                    value={settings[type].size}
                    suffix="px"
                    iconBefore="fontSize"
                    onChange={value =>
                      updateNestedSettings(type, "size", value)
                    }
                  />

                  <Counter
                    iconBefore="lineHeight"
                    value={settings[type].lineHeight}
                    steps={0.25}
                    onChange={value =>
                      updateNestedSettings(type, "lineHeight", value)
                    }
                  />

                  <ColorPicker
                    iconBefore="color"
                    value={settings[type].color}
                    onChange={value =>
                      updateNestedSettings(type, "color", value)
                    }
                  />
                  <Shorthand
                    value={settings[type].margin}
                    iconBefore="margin"
                    onChange={value =>
                      updateNestedSettings(type, "margin", value)
                    }
                  />

                  <RadioGroup
                    value={settings[type].textAlign}
                    name="textalign"
                    iconBefore="leftAlign"
                    options={[
                      { value: "left", icon: "leftAlign" },
                      { value: "center", icon: "centerAlign" },
                      { value: "right", icon: "rightAlign" }
                    ]}
                    onChange={value =>
                      updateNestedSettings(type, "textAlign", value)
                    }
                  />

                  <RadioGroup
                    value={settings[type].textTransform}
                    name="texttransform"
                    iconBefore="mixedcase"
                    options={[
                      { value: "none", icon: "mixedcase" },
                      { value: "uppercase", icon: "uppercase" },
                      { value: "lowercase", icon: "lowercase" }
                    ]}
                    onChange={value =>
                      updateNestedSettings(type, "textTransform", value)
                    }
                  />
                </>
              )}
            </div>
          )}
        </div>
      )}
      {children}
    </StyledInlineSettings>
  );
};

export default InlineSettings;
