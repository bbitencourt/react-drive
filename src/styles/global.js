import { createGlobalStyle } from "styled-components";
import RegularSans from "../assets/fonts/UnimedSans-Regular.otf";
import RegularSansItalic from "../assets/fonts/UnimedSans-RegularItalic.otf";
import BoldSans from "../assets/fonts/UnimedSans-Bold.otf";
import SemiSans from "../assets/fonts/UnimedSans-SemiBold.otf";
import BoldSlab from "../assets/fonts/UnimedSlab-Bold.otf";
import ExtraSlab from "../assets/fonts/UnimedSlab-ExtraBold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "UnimedSansRegular";
    src: url(${RegularSans}) format("opentype");
  }

  @font-face {
    font-family: "RegularSansItalic";
    src: url(${RegularSansItalic}) format("opentype");
  }

  @font-face {
    font-family: "UnimedSansBold";
    src: url(${BoldSans}) format("opentype");
  }

  @font-face {
    font-family: "UnimedSansSemi";
    src: url(${SemiSans}) format("opentype");
  }

  @font-face {
    font-family: "UnimedSlabBold";
    src: url(${BoldSlab}) format("opentype");
  }

  @font-face {
    font-family: "UnimedSlabExtra";
    src: url(${ExtraSlab}) format("opentype");
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html,
  body,
  #root {
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background:#fff;
    font-family: "UnimedSansRegular", sans-serif;
    color:#717171;
    font-weight: normal;
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
  button {
    font-family: "UnimedSansSemi", sans-serif;
    border: 0;
    cursor: pointer;
    background-color: transparent;
  }
  input {
    font-family: "UnimedSansRegular", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "UnimedSlabBold", sans-serif;
  }
  ul {
    list-style: none;
  }

  .toastsuccess {
    background:#39254d !important;
  }
  .bodytoast {
    font-family: "UnimedSansSemi", sans-serif;
    font-size: 16px;
    padding: 0 16px;
  }
`;

export default GlobalStyle;
