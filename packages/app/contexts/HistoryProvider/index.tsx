import React, { useReducer } from "react";
import { HistoryContextProps } from "./definitions";
import { reducer } from "./reducer";

export const HistoryContext = React.createContext<HistoryContextProps>({
  history: [],
  addToHistory: () => {},
  historyIndex: -1,
  historyBack: () => {},
  updateHistoryIndex: () => {},
  resetHistory: () => {},
  historyForward: () => {}
});

const HistoryProvider = ({ children }) => {
  const [{ history, historyIndex }, dispatch] = useReducer(reducer, {
    history: [],
    historyIndex: -1
  });

  // const [history, setHistory] = useState<HistoryObject[]>([]);
  // const [historyIndex, setHistoryIndex] = useState(-1);

  const addToHistory = item => {
    if (historyIndex + 1 !== history.length) {
      history.splice(historyIndex + 1, history.length);
    }
    return dispatch({ type: "ADD_TO_HISTORY", payload: { item } });
  };

  const updateHistoryIndex = async (index, callback) => {
    dispatch({ type: "UPDATE_HISTORY_INDEX", payload: { index } });
    if (callback) callback(history[index]);
  };

  const resetHistory = () => {
    return dispatch({ type: "RESET_HISTORY" });
  };

  const historyForward = callback => {
    const newIndex = historyIndex + 1;

    if (history.length === newIndex) return;

    dispatch({ type: "UPDATE_HISTORY_INDEX", payload: { index: newIndex } });
    if (callback) callback(history[newIndex]);
  };

  const historyBack = callback => {
    if (historyIndex === 0) return;

    const newIndex = historyIndex - 1;

    dispatch({ type: "UPDATE_HISTORY_INDEX", payload: { index: newIndex } });
    if (callback) callback(history[newIndex]);
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
