import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SettingsContext } from "./settingsProvider";

export const TextContext = React.createContext();

const TextProvider = ({ children }) => {
  const { settings, utility } = useContext(SettingsContext);
  const {
    paragraph: { numberOfCharacters },
    removeSpecialCharacters,
    textType
  } = settings;
  const { printTags } = utility;

  const textTypes = [
    { label: "Lorem Ipsum", value: "loremIpsum" },
    { label: "Scientific Text", value: "scientific" }
  ];

  const texts = {
    loremIpsum:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
    scientific:
      "Science Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh."
  };

  const headlines = {
    loremIpsum: "Lorem Testheadline ist ganz wichtig und so",
    scientific: "Science Testheadline ist ganz wichtig und so"
  };

  const sublines = {
    loremIpsum: "Lorem Testsubline ist ganz wichtig und so",
    scientific: "Science Testsubline ist ganz wichtig und so"
  };

  const deleteSpecialCharacters = string =>
    string.replace(/[^a-zA-Z0-9.,-?!\s]/g, "");

  const getText = () => {
    const limitCharacters = texts[textType]
      .repeat(10)
      .substring(0, numberOfCharacters);
    let text = limitCharacters;

    if (removeSpecialCharacters) {
      text = deleteSpecialCharacters(text);
    }

    if (printTags) {
      text = `<p>${text}</p>`;
    }

    return text;
  };

  const getHeadline = () => {
    let headline = headlines[textType];

    if (removeSpecialCharacters) {
      headline = deleteSpecialCharacters(headline);
    }

    if (printTags) {
      headline = `<h2>${headline}</h2>`;
    }

    return headline;
  };

  const getSubline = () => {
    let subline = sublines[textType];

    if (removeSpecialCharacters) {
      subline = deleteSpecialCharacters(subline);
    }

    if (printTags) {
      subline = `<h3>${subline}</h3>`;
    }

    return subline;
  };

  return (
    <TextContext.Provider
      value={{ textTypes, texts, getText, getHeadline, getSubline }}
    >
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
