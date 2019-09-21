import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SettingsContext } from "./settingsProvider";

export const TextContext = React.createContext();

const TextProvider = ({ children }) => {
  const { settings } = useContext(SettingsContext);
  const { numberOfCharacters, removeSpecialCharacters } = settings;

  const texts = {
    loremIpsum:
      "Lörem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh."
  };

  const deleteSpecialCharacters = string =>
    string.replace(/[^a-zA-Z0-9\s]/g, "");

  const getText = () => {
    const text = texts.loremIpsum.repeat(10).substring(0, numberOfCharacters);

    if (removeSpecialCharacters) {
      return deleteSpecialCharacters(text);
    }

    return text;
  };

  return (
    <TextContext.Provider value={{ texts, getText, removeSpecialCharacters }}>
      {children}
    </TextContext.Provider>
  );
};

TextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

TextProvider.defaultProps = {};

export const TextConsumer = TextContext.Consumer;

export default TextProvider;
