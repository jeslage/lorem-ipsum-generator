import React, { useContext, useState, useCallback } from "react";

import { decodeConfig } from "../../helper";

import { HistoryContext, SettingsContext } from "../../contexts";

import Button from "../Button";
import Icon from "../Icon";

import StyledHistory from "./History.style";

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
    updateAllSettings(decodeConfig(item.settings), false);
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
        <Icon type={visible ? "minus" : "plus"} />
        History
      </button>
      {visible && (
        <>
          <div className="history__buttons">
            <Button
              disabled={historyIndex === 0}
              onClick={() => historyBack(handleHistoryChange)}
              iconBefore="undo"
              variant="secondary"
              title="Undo"
            />

            <Button
              disabled={history.length === historyIndex + 1}
              iconAfter="redo"
              variant="secondary"
              onClick={() => historyForward(handleHistoryChange)}
              title="Redo"
            />
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
                        {item.parentKey && (
                          <>{splitCamelCase(item.parentKey)} &rarr; </>
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
