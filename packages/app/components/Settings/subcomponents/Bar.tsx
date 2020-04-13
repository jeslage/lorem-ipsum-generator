import React, { useContext } from "react";
import * as clipboard from "clipboard-polyfill";
import { useToasts } from "react-toast-notifications";

import { SettingsContext } from "../../../contexts";

import Button from "../../Button";
import IconButton from "../../IconButton";

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

    clipboard.writeText(
      document.getElementById("textContent")?.innerText || ""
    );
  };

  return (
    <>
      <Button onClick={copyText} iconBefore="copy">
        Copy Text
      </Button>
      <IconButton
        onClick={reset}
        icon="remove"
        label="Reset settings"
        variant="outlined"
        size="large"
      />
    </>
  );
};

export default Bar;
