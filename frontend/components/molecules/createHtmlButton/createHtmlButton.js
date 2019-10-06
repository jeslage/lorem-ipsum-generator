import React, { useState, useContext } from "react";
import { useToasts } from "react-toast-notifications";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";
import Button from "../../atoms/button/button";

const CreateHtmlButton = () => {
  const { addToast } = useToasts();

  const [create, setCreate] = useState(false);
  const { settings, utility, updateUtility } = useContext(SettingsContext);
  const { textContainer } = useContext(TextContext);

  const { printTags, printInlineStyles } = utility;

  const handleDownload = async () => {
    const htmlText = textContainer.current
      ? textContainer.current.innerHTML
      : "";

    if (printInlineStyles) {
      await updateUtility("printInlineStyles", false);
    }
    if (printTags) {
      await updateUtility("printTags", false);
    }

    setCreate(true);

    await fetch("/create-html", {
      method: "POST",
      body: JSON.stringify({ ...settings, htmlText }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.setAttribute(
          "download",
          `lorem-ipsum-generator_${Date.now()}.html`
        );

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setCreate(false);
        addToast("HTML created successfully", {
          appearance: "success",
          autoDismiss: true
        });
      })
      .catch(() => {
        setCreate(false);
        addToast("Something went wrong", {
          appearance: "error",
          autoDismiss: true
        });
      });
  };

  return (
    <Button onClick={handleDownload}>
      {create ? "Creating HTML File" : "Download HTML File"}
    </Button>
  );
};

export default CreateHtmlButton;
