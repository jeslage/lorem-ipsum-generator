import React, { useState, useContext } from "react";

import { SettingsContext } from "@contexts/settingsProvider";

import Range from "@atoms/range/range";
import Select from "@atoms/select/select";
import SvgSprite from "@atoms/SvgSprite";
import Switch from "@components/Switch";
import Counter from "@components/Counter";
import ColorPicker from "@components/ColorPicker";
import RadioGroup from "@atoms/radioGroup/radioGroup";
import Shorthand from "@atoms/shorthand/shorthand";

import SettingIcon from "@icons/settings.svg";
import FontFamilyIcon from "@icons/fontFamily.svg";
import FontSizeIcon from "@icons/fontSize.svg";
import LineHeightIcon from "@icons/lineHeight.svg";
import ColorIcon from "@icons/color.svg";
import MarginIcon from "@icons/margin.svg";
import LeftAlignIcon from "@icons/leftAlign.svg";
import CenterAlignIcon from "@icons/centerAlign.svg";
import RightAlignIcon from "@icons/rightAlign.svg";

import StyledInlineSetting from "./inlineSetting.style";

const InlineSetting = ({ setting, children }) => {
  const [isEntered, setIsEntered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { settings, fontFamilies, updateNestedSettings } = useContext(
    SettingsContext
  );
  return (
    <StyledInlineSetting
      isOpen={isOpen}
      onMouseEnter={() => setIsEntered(true)}
      onMouseLeave={() => {
        setIsEntered(false);
        setIsOpen(false);
      }}
    >
      {isEntered && (
        <div className="inlineSetting__setting">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="inlineSetting__button"
          >
            <SvgSprite icon={SettingIcon} />
          </button>
          {isOpen && (
            <div className="inlineSetting__content">
              {setting === "list" ? (
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
                    options={fontFamilies}
                    initialValue={settings[setting].fontFamily}
                    iconBefore={FontFamilyIcon}
                    onChange={value =>
                      updateNestedSettings(setting, "fontFamily", value)
                    }
                  />
                  <Range
                    iconBefore={FontSizeIcon}
                    value={settings[setting].size}
                    suffix="px"
                    onChange={value =>
                      updateNestedSettings(setting, "size", value)
                    }
                  />
                  <Counter
                    iconBefore={LineHeightIcon}
                    value={settings[setting].lineHeight}
                    steps={0.25}
                    onChange={value =>
                      updateNestedSettings(setting, "lineHeight", value)
                    }
                  />

                  <ColorPicker
                    value={settings[setting].color}
                    onChange={value =>
                      updateNestedSettings(setting, "color", value)
                    }
                  />
                  <Shorthand
                    iconBefore={MarginIcon}
                    value={settings[setting].margin}
                    onChange={value =>
                      updateNestedSettings(setting, "margin", value)
                    }
                  />

                  <RadioGroup
                    value={settings[setting].textAlign}
                    name="textalign"
                    iconBefore={LeftAlignIcon}
                    options={[
                      { value: "left", icon: LeftAlignIcon },
                      { value: "center", icon: CenterAlignIcon },
                      { value: "right", icon: RightAlignIcon }
                    ]}
                    onChange={value =>
                      updateNestedSettings(setting, "textAlign", value)
                    }
                  />
                </>
              )}
            </div>
          )}
        </div>
      )}
      {children}
    </StyledInlineSetting>
  );
};

export default InlineSetting;
