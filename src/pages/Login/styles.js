import styled from "styled-components";
import bgLogin from "../../assets/images/bg-login.png";
import logo from "../../assets/images/logo.png";

export const Container = styled.div`
  display: flex;
  min-height: 100%;
  background: #39254d;
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
`;

export const ImageBackground = styled.div`
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 24px;
  background: url(${bgLogin}) no-repeat;
  background-size: cover;
  flex: 0.5;

  @media only screen and (max-width: 1020px) {
    display: none;
  }
`;

export const Info = styled.span`
  font-size: 12px;
  color: #fff;
  text-align: right;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0.5;
  padding: 48px 100px;

  form {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      margin-bottom: 32px;
    }

    input {
      padding: 16px;
      border: 1px #b1b7be solid;
      height: 54px;
      color: #4e545c;
      font-size: 14px;

      &.username {
        border-radius: 8px 8px 0 0;
      }

      &.password {
        border-radius: 0 0 8px 8px;
        border-top: 0;
      }
      &.CheckBox {
        height: auto;
        margin-right: 8px;
      }
    }
  }

  @media only screen and (max-width: 1020px) {
    flex: 1;
    align-items: center;
    form {
      p {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    padding: 24px;
  }
`;

export const WrapInput = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 520px;
  display: flex;
  flex-direction: column;

  span {
    position: absolute;
    top: 33%;
    right: 5%;
    color: #ff4b2b;
    font-size: 11px;

    i {
      font-size: 16px;
      color: #ff4b2b;
    }
  }
`;
export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: "Logo",
})`
  margin-bottom: 72px;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-size: 40px;
  line-height: 40px;
  margin: 32px 0;
  max-width: 520px;

  @media only screen and (max-width: 1020px) {
    text-align: center;
  }
`;

export const Lembrar = styled.div`
  margin: 32px 0 32px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    transition: 300ms;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.5;
    }
  }

  @media only screen and (max-width: 1020px) {
    justify-content: center;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  color: #8b8d97;
  font-size: 14px;
`;

export const Button = styled.button.attrs({
  type: "submit",
})`
  width: 220px;
  background: #f47d35;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  transition: 300ms;
  cursor: pointer;

  .icon-spin {
    -webkit-animation: icon-spin 2s infinite linear;
    animation: icon-spin 2s infinite linear;
  }
  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
  &:hover {
    transform: scale(0.98);
  }
  &:active {
    transform: scale(0.93);
  }

  @media only screen and (max-width: 1020px) {
    width: 100%;
  }
`;
