import React, { useContext, useState, useCallback } from "react";

import { decode64 } from "../../../helper";

import { HistoryContext } from "../../../contexts/historyProvider";
import { SettingsContext } from "../../../contexts/settingsProvider";

import Button from "../../atoms/button/button";
import SvgSprite from "../../atoms/svgSprite/svgSprite";
import StyledHistory from "./history.style";

import MinusIcon from "../../icons/minus.svg";
import PlusIcon from "../../icons/plus.svg";
import UndoIcon from "../../icons/undo.svg";
import RedoIcon from "../../icons/redo.svg";

const History = () => {
  const [visible, setVisible] = useState(false);

  const {
    history,
    historyIndex,
    historyBack,
    updateHistoryIndex,
    historyForward
  } = useContext(HistoryContext);

  // Update scroll position of container, when history entry was added
  const listRef = useCallback(
    node => {
      if (node !== null && historyIndex !== history.length) {
        node.scrollTop = node.scrollHeight;
      }
    },
    [history]
  );

  const { updateAllSettings } = useContext(SettingsContext);

  const handleHistoryChange = item => {
    updateAllSettings(decode64(item.settings), false);
  };

  const splitCamelCase = string =>
    string.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

  return (
    <StyledHistory>
      <button
        type="button"
        onClick={() => setVisible(prev => !prev)}
        className="history__toggle"
      >
        <SvgSprite icon={visible ? MinusIcon : PlusIcon} />
        History
      </button>
      {visible && (
        <>
          <div className="history__buttons">
            <Button
              disabled={historyIndex === 0}
              onClick={() => historyBack(handleHistoryChange)}
              iconBefore={UndoIcon}
            >
              Undo
            </Button>
            <Button
              disabled={history.length === historyIndex + 1}
              iconAfter={RedoIcon}
              onClick={() => historyForward(handleHistoryChange)}
            >
              Redo
            </Button>
          </div>
          <div className="history__list" ref={listRef}>
            {history.length > 0 ? (
              <>
                {history.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={`history__entry ${
                        historyIndex < index ? "inactive" : ""
                      } ${historyIndex === index ? "current" : ""}`}
                      onClick={() =>
                        updateHistoryIndex(index, handleHistoryChange)
                      }
                    >
                      <span>
                        {item.parentKey ? (
                          <>{splitCamelCase(item.parentKey)} &rarr; </>
                        ) : (
                          ""
                        )}
                        {splitCamelCase(item.key)}
                      </span>
                      {typeof item.value !== "object" && item.value && (
                        <span>{item.value.toString()}</span>
                      )}
                    </button>
                  );
                })}
              </>
            ) : (
              <p>No changes detected</p>
            )}
          </div>
        </>
      )}
    </StyledHistory>
  );
};

export default History;