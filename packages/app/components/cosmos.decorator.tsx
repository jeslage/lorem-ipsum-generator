import React from "react";
import { ToastProvider } from "react-toast-notifications";
import { DndProvider } from "react-dnd-cjs";
import HTML5Backend from "react-dnd-html5-backend-cjs";

import GlobalStyle from "../styles/global";
import withApollo from "../graphql/with-apollo";

import SettingsProvider from "../contexts/settingsProvider";
import TextProvider from "../contexts/textProvider";
import PresetsProvider from "../contexts/presetsProvider";
import HistoryProvider from "../contexts/historyProvider";

import Toast from "./Toast";

export default withApollo(({ children }) => (
  <DndProvider backend={HTML5Backend}>
    <HistoryProvider>
      <SettingsProvider>
        <TextProvider>
          <PresetsProvider>
            <ToastProvider
              autoDismissTimeout={2000}
              placement="bottom-center"
              components={{ Toast: Toast }}
            >
              <>
                <GlobalStyle />
                {children}
              </>
            </ToastProvider>
          </PresetsProvider>
        </TextProvider>
      </SettingsProvider>
    </HistoryProvider>
  </DndProvider>
));
