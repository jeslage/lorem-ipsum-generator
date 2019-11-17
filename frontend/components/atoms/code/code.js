import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useToasts } from "react-toast-notifications";

import Prism from "prismjs";
import * as clipboard from "clipboard-polyfill";

import StyledCode from "./code.style";

import Button from "@atoms/button/button";
import SvgSprite from "@atoms/svgSprite/svgSprite";
import CopyIcon from "@icons/copy.svg";

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
  const { addToast } = useToasts();

  const { language, code } = props;
  const [showCode, setShowCode] = useState(false);
  const [init, setInit] = useState(false);
  const codeBox = React.createRef();

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

    clipboard.writeText(codeBox.current.innerText);
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
            <SvgSprite icon={CopyIcon} />
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
