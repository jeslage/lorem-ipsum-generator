import React, { useEffect, useState, useRef, FC } from "react";
import { useToasts } from "react-toast-notifications";

import Prism from "prismjs";
import * as clipboard from "clipboard-polyfill";

import StyledCode from "./Code.style";

import Button from "../Button";
import CopyIcon from "../icons/CopyIcon";

const loadLanguage = async (language: "javascript" | "css") => {
  if (language === "javascript") {
    await import(
      /* webpackChunkName: "code-js" */ "prismjs/components/prism-javascript"
    );
  } else if (language === "css") {
    await import(
      /* webpackChunkName: "code-css" */ "prismjs/components/prism-css"
    );
  }
};

export interface CodeProps {
  language?: "javascript" | "css";
  code: string;
}

const Code: FC<CodeProps> = ({ language = "css", code }) => {
  const { addToast } = useToasts();

  const [showCode, setShowCode] = useState(false);
  const [init, setInit] = useState(false);
  const codeBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!init && showCode) {
      loadLanguage(language);
      setInit(true);
    }
    Prism.highlightAll();
  }, [showCode]);

  useEffect(() => Prism.highlightAll(), [code]);

  const copyCode = () => {
    addToast("Copied CSS Successfully", {
      appearance: "success",
      autoDismiss: true
    });

    if (codeBox.current) {
      clipboard.writeText(codeBox.current.innerText);
    }
  };

  return (
    <StyledCode init={init}>
      <Button
        onClick={() => setShowCode(prev => !prev)}
        className="code__showCode"
      >
        {showCode ? "Hide CSS" : "Show CSS"}
      </Button>
      {showCode && (
        <div className="code__content">
          <button
            type="button"
            onClick={copyCode}
            className="code__copyButton"
            aria-label="Copy"
            title="Copy"
          >
            <CopyIcon />
          </button>
          <pre>
            <code className={`language-${language}`} ref={codeBox}>
              {code}
            </code>
          </pre>
        </div>
      )}
    </StyledCode>
  );
};

export default Code;
