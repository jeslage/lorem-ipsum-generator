import React, { useState } from "react";

export interface HistoryContextProps {
  history: any[];
  addToHistory: (obj: any) => void;
  historyIndex: number;
  historyBack: (callback: any) => void;
  updateHistoryIndex: (index: number, callback: any) => void;
  resetHistory: () => void;
  historyForward: (callback: any) => void;
}

const defaultProps = {
  history: [],
  addToHistory: () => {},
  historyIndex: -1,
  historyBack: () => {},
  updateHistoryIndex: () => {},
  resetHistory: () => {},
  historyForward: () => {}
};

export const HistoryContext = React.createContext<HistoryContextProps>(
  defaultProps
);

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState<any[]>([]);
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

  const resetHistory = () => {
    setHistory([]);
    setHistoryIndex(0);
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
        resetHistory,
        historyForward
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export const HistoryConsumer = HistoryContext.Consumer;

export default HistoryProvider;
