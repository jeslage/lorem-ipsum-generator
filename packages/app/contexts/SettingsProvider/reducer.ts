import { ReducerState } from "./definitions";

export const reducer = (
  state: ReducerState,
  { type, payload }
): ReducerState => {
  switch (type) {
    case "UPDATE_UTILITY":
      return {
        ...state,
        utility: {
          ...state.utility,
          [payload.key]: payload.value
        }
      };

    case "UPDATE_SETTINGS":
      return {
        ...state,
        settings: payload.settings
      };

    case "REMOVE_NESTED_ARRAY":
      const newArray = state.settings[payload.key][payload.subKey].filter(
        (_, i) => i !== payload.index
      );

      return {
        ...state,
        settings: {
          ...state.settings,
          [payload.key]: {
            ...state.settings[payload.key],
            [payload.subKey]:
              newArray.length === 0 ? ["Insert custom text"] : newArray
          }
        }
      };

    case "ADD_NESTED_ARRAY":
      return {
        ...state,
        settings: {
          ...state.settings,
          [payload.key]: {
            ...state.settings[payload.key],
            [payload.subKey]: [
              ...state.settings[payload.key][payload.subKey],
              ""
            ]
          }
        }
      };

    default:
      return state;
  }
};
