import SettingsProvider from "../contexts/settingsProvider";
import GlobalStyle from "../styles/global";

export default ({ children }) => (
  <SettingsProvider>
    <>
      <GlobalStyle />
      {children}
    </>
  </SettingsProvider>
);
