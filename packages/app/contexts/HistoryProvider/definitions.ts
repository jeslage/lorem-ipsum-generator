export type HistoryObject = {
  parentKey: string | null;
  key: string;
  value: any;
  settings: string;
};

export interface HistoryContextProps {
  history: HistoryObject[];
  addToHistory: (obj: HistoryObject) => void;
  historyIndex: number;
  historyBack: (callback: any) => void;
  updateHistoryIndex: (index: number, callback: any) => void;
  resetHistory: () => void;
  historyForward: (callback: any) => void;
}

export type HistoryReducerState = {
  history: HistoryObject[];
  historyIndex: number;
};

export type HistoryReducerAction = {
  type: string;
  payload?: any;
};
