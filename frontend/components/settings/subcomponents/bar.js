import React, { useContext } from "react";
import * as clipboard from "clipboard-polyfill";
import { useToasts } from "react-toast-notifications";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Button from "../../button/button";
import SvgSprite from "../../svgSprite/svgSprite";

import CopyIcon from "../../../icons/copy.svg";
import RemoveIcon from "../../../icons/remove.svg";

const Bar = () => {
  const { addToast } = useToasts();
  const { resetSettings } = useContext(SettingsContext);

  const reset = () => {
    addToast("Settings resetted", {
      appearance: "success",
      autoDismiss: true
    });
    resetSettings();
  };
  const copyText = () => {
    addToast("Copied Successfully", {
      appearance: "success",
      autoDismiss: true
    });

    clipboard.writeText(document.getElementById("textContent").innerText);
  };

  return (
    <>
      <Button onClick={copyText}>
        <SvgSprite icon={CopyIcon} />
        Copy
      </Button>
      <Button onClick={reset}>
        <SvgSprite icon={RemoveIcon} />
        Reset settings
      </Button>
    </>
  );
};

export default Bar;
