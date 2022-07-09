import { createGlobalStyle } from "styled-components";

import theme from "./theme";
import Reset from './reset';
import RootVariables from "./root";

const GlobalStyles = createGlobalStyle`
${RootVariables}
${Reset}

body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};

    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
        display: none;
    }
}

hr {
    border-top: 1px solid ${theme.colors.gray}
    border-botttom: none;
}
`;

export default GlobalStyles;