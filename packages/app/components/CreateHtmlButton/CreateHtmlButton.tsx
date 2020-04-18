import React, { useContext } from "react";
import { useToasts } from "react-toast-notifications";

import { SettingsContext } from "../../contexts";

import Button from "../Button";
import buildHtml from "../../helper/buildHtml";

const CreateHtmlButton = () => {
  const { addToast } = useToasts();

  const { settings, utility, updateUtility } = useContext(SettingsContext);

  const { printTags, printInlineStyles } = utility;

  const handleDownload = async () => {
    if (printInlineStyles) {
      await updateUtility("printInlineStyles", false);
    }
    if (!printTags) {
      await updateUtility("printTags", true);
    }

    const textContainer = document.getElementById("textContent");
    const htmlText = textContainer ? textContainer.textContent : "";

    try {
      const htmlString = await buildHtml({ ...settings, htmlText });
      var blob = new Blob([htmlString], { type: "text/html" });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", `lorem-ipsum-generator_${Date.now()}.html`);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      addToast("HTML created successfully", {
        appearance: "success",
        autoDismiss: true
      });
    } catch (err) {
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true
      });
    }

    await updateUtility("printTags", false);
  };

  return <Button onClick={handleDownload}>Download HTML File</Button>;
};

export default CreateHtmlButton;
