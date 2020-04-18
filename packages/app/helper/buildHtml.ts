import { SettingsObject } from "../contexts/SettingsProvider/definitions";

interface HTMLObject extends SettingsObject {
  htmlText?: string | null;
}

const buildHtml = (settings: HTMLObject) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lorem Ipsum Generator</title>
    </head>
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      main {
        width: ${settings.textWidth};
        background-color: ${settings.backgroundColor};
        padding: 40px;
      }

      p {
        font-family: ${settings.paragraph.fontFamily};
        font-size: ${settings.paragraph.size}px;
        line-height: ${settings.paragraph.lineHeight};
        letter-spacing: ${settings.paragraph.letterSpacing}px;
        text-align: ${settings.paragraph.textAlign};
        text-transform: ${settings.paragraph.textTransform};
        color: ${settings.paragraph.color};
      }

      h2 {
        font-family: ${settings.headline.fontFamily};
        font-size: ${settings.headline.size}px;
        line-height: ${settings.headline.lineHeight};
        text-align: ${settings.headline.textAlign};
        text-transform: ${settings.headline.textTransform};
        color: ${settings.headline.color};
      }

      h3 {
        font-family: ${settings.subline.fontFamily};
        font-size: ${settings.subline.size}px;
        line-height: ${settings.subline.lineHeight};
        text-align: ${settings.subline.textAlign};
        text-transform: ${settings.subline.textTransform};
        color: ${settings.subline.color};
      }
    </style>
    <body>
      <main>
        ${settings.htmlText}
      </main>
    </body>
  </html>
`;

export default buildHtml;
