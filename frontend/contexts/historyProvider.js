import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const HistoryContext = React.createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const addToHistory = obj => {
    if (historyIndex + 1 !== history.length) {
      history.splice(historyIndex + 1, history.length);
    }

    setHistoryIndex(prev => prev + 1);
    setHistory(prev => [...prev, obj]);
  };

  const updateHistoryIndex = (index, callback) => {
    setHistoryIndex(index);
    if (callback) callback(history[index]);
  };

  const historyForward = callback => {
    const newIndex = historyIndex + 1;

    if (history.length === newIndex) return;

    if (callback) callback(history[newIndex]);
    setHistoryIndex(newIndex);
  };

  const historyBack = callback => {
    if (historyIndex === 0) return;

    const newIndex = historyIndex - 1;

    if (callback) callback(history[newIndex]);

    setHistoryIndex(newIndex);
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        addToHistory,
        historyIndex,
        historyBack,
        updateHistoryIndex,
        historyForward
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

HistoryProvider.propTypes = {
  children: PropTypes.node.isRequired
};

HistoryProvider.defaultProps = {
  queryConfig: {}
};

export const HistoryConsumer = HistoryContext.Consumer;

export default HistoryProvider;
