import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Prism from "prismjs";
import * as clipboard from "clipboard-polyfill";

import StyledCode from "./code.style";
import { visible } from "ansi-colors";
import Button from "../button/button";

const loadLanguage = async language => {
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

const Code = props => {
  const { language, code } = props;
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [init, setInit] = useState(false);
  const codeBox = React.createRef();

  useEffect(() => {
    if (!init && showCode) {
      loadLanguage(language);
      setInit(true);
    }
    Prism.highlightAll();
  }, [showCode]);

  const copyCode = () => {
    setCopied(true);
    clipboard.writeText(codeBox.current.innerText);
    setTimeout(() => setCopied(false), 2000);
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
        <pre>
          <button type="button" onClick={copyCode} className="code__copyButton">
            {copied ? "Copied" : "Copy"}
          </button>
          <code className={`language-${language}`} ref={codeBox}>
            {code}
          </code>
        </pre>
      )}
    </StyledCode>
  );
};

Code.propTypes = {
  /** Code */
  code: PropTypes.string.isRequired,
  /** Code Language */
  language: PropTypes.oneOf(["javascript", "css"])
};

Code.defaultProps = {
  language: "css"
};

export default Code;
