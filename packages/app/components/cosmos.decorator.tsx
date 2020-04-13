import React from "react";
import { ToastProvider } from "react-toast-notifications";

import GlobalStyle from "../styles/global";
import withApollo from "../graphql/with-apollo";

import {
  SettingsProvider,
  TextProvider,
  PresetsProvider,
  HistoryProvider
} from "../contexts";

import Toast from "./Toast";

export default withApollo(({ children }) => (
  <HistoryProvider>
    <SettingsProvider queryConfig={{ backgroundColor: "#323232" }}>
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
));
