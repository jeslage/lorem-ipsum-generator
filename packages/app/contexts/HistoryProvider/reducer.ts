import { HistoryReducerState, HistoryReducerAction } from "./definitions";

export const reducer = (
  state: HistoryReducerState,
  { type, payload }: HistoryReducerAction
): HistoryReducerState => {
  switch (type) {
    case "ADD_TO_HISTORY":
      return {
        history: [...state.history, payload.item],
        historyIndex: state.historyIndex + 1
      };

    case "UPDATE_HISTORY_INDEX":
      return {
        ...state,
        historyIndex: payload.index
      };

    case "RESET_HISTORY":
      return {
        history: [],
        historyIndex: 0
      };

    default:
      return state;
  }
};
