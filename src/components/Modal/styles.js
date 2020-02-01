import styled from "styled-components";

export const Button = styled.button.attrs({
  type: "button",
})`
  display: flex;
  padding: 0 48px;
  height: 54px;
  color: #fff;
  background-color: #f47d35;
  font-size: 17px;
  border-radius: 6px;
  margin-left: 24px;
  transition: 300ms ease;

  &:hover {
    transform: scale(0.95);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  z-index: 998;
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 780px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  padding: 48px;
  position: relative;
  animation-name: appear;
  animation-duration: 200ms;
  animation-timing-function: ease-in;
  animation-direction: ${({ open }) => (open ? "alternate" : "reverse")};

  @keyframes appear {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  p {
    font-size: 16px;
    color: #5c5d62;
    margin-bottom: 32px;
  }

  form {
    width: 100%;

    span {
      display: block;
      width: 100%;
      margin: -16px 0 16px 0;
      color: #e53935;
      font-size: 14px;
    }

    input,
    select {
      width: 100%;
      height: 48px;
      padding: 0 16px;
      background-color: #fff;
      border: none;
      border: 1px #c9c9c9 solid;
      border-radius: 6px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1),
        inset 0 0 10px rgba(0, 0, 0, 0.1);
      font-family: "UnimedSansRegular";
      font-size: 16px;
      margin-bottom: 24px;
    }
    input.file {
      width: 0;
      height: 0;
      border: none;
      position: absolute;
      z-index: 0;
    }

    label {
      display: block;
      font-family: "UnimedSansSemi";
      margin-bottom: 8px;
      color: #000;
    }
  }
`;

export const FakeInputFile = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 160px 0 16px;
  border: none;
  border: 1px #c9c9c9 solid;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "UnimedSansRegular";
  font-size: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const FileButton = styled.button.attrs({
  type: "button",
})`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 48px;
  background-color: #39254d;
  padding: 0 32px;
  color: #fff;
  font-size: 15px;
  border-radius: 0 6px 6px 0;
  transition: 300ms ease;

  &:hover {
    background-color: #572b83;
  }
`;

export const Close = styled.button.attrs({
  type: "button",
})`
  position: absolute;
  z-index: 999;
  right: -16px;
  top: -16px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f47d35;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms ease;

  &:hover {
    transform: scale(0.9);
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #000;
  margin-bottom: 8px;
`;

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .icon-spin {
    color: #999;
    animation: icon-spin 2s infinite linear;
  }

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  display: flex;
  padding: 0 48px;
  height: 54px;
  color: #fff;
  background-color: #f47d35;
  font-size: 17px;
  border-radius: 6px;
  transition: 300ms ease;
  margin-right: 32px;
  opacity: ${({ off }) => (off ? 0.5 : 1)};
  cursor: ${({ off }) => (off ? "default" : "pointer")};

  &:hover {
    transform: ${({ off }) => (off ? "none" : "scale(0.95)")};
  }
`;
