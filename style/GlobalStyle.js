import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Ubuntu';
    src: url('../static/fonts/Ubuntu/Ubuntu-Regular.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url('../static/fonts/Ubuntu/Ubuntu-Medium.ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Ubuntu';
    src: url('../static/fonts/Ubuntu/Ubuntu-Bold.ttf');
    font-weight: 900;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: ${colors.prime};
    color: ${colors.white};
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.mono};
    color: ${colors.darkGrey};
    background-color: ${colors.offWhite};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    transition: ${theme.transition};
    color: ${colors.prime};
    display: inline-block;

    &:hover,
    &:focus {
    }
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    transition: ${theme.transition};
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

`;

export default GlobalStyle;
