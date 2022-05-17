import React from "react";
import { ThemeProvider } from "styled-components"

/*Obs: eu não consegui achar uma tipagem adequada para o index do array. Então
tipei dessa forma abaixo:

Porém, antes não tinha o type e o const assim: 'fontSizes: any = [14, 20, 96]'
*/
type TypeFontSizes = {
  [key: string]: number;
}
const fontSizes: TypeFontSizes = {'0': 14, '1': 20, '2': 96};

fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const primary = '#256784';
const secondary = '#f9b531'

const theme = {
  fontSizes,
  colors: {
    primary,
    secondary,
  },
};

type TypeChildren = {
  children?: React.ReactNode;
};

export const Theme: React.FC<TypeChildren> = ({ children }) => {
  return (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
  );
};

/*O código abaixo é uma outra forma de tipar esta prop children.

A diferença entre 'type' e 'interface' é:
==> Type: suporta somente tipos de dados e não o uso de um objeto.
==> Interface: suporta o uso de objeto.
*/

// interface InterfaceChildren {
//   children?: React.ReactNode;
// };

// export const Theme = (props: InterfaceChildren) => {
//   return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
// }