import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }



  

  /* Set core body defaults */
  body {
    min-height: 100vh;
    width: 100vw;
    background: url('images/image-hero-desktop.jpg') no-repeat;
    background-position: top;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  // remove default styles for list's

  ul {
    list-style: none;
    padding: 0;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  
  button, input {
    background-color: unset;
    border: unset;
    outline: unset;
  }


`;

export default GlobalStyles;