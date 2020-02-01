import styled from "styled-components";

import iconFile from "../../assets/images/icon-file.png";
import iconVideo from "../../assets/images/icon-video.png";
import iconPpt from "../../assets/images/icon-presentation.png";

export const Container = styled.div`
  display: block;
  width: 230px;
  height: 210px;
  padding: 32px;
  background-color: #ededed;
  border-radius: 6px;
  transition: 300ms ease;
  position: relative;

  &:hover {
    transform: scale(0.97);
  }
`;

export const Delete = styled.button.attrs({
  type: "button",
})`
  position: absolute;
  right: 32px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms ease;
  transform-origin: center center;
  color: #5c5d62;

  &:hover {
    transform: scale(1.5);
    color: #e53935;
  }

  .icon-spin {
    color: #5c5d62;
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
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  height: 100%;
`;

export const Icon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  background: ${({ type }) => {
    switch (type) {
      case "documento":
        return `rgba(237, 47, 89, 0.16) url(${iconFile}) no-repeat center center`;
      case "video":
        return `rgba(16, 167, 132, 0.16) url(${iconVideo}) no-repeat center center`;
      case "slide":
        return `rgba(30, 155, 211, 0.16) url(${iconPpt}) no-repeat center center`;
      default:
        return "none";
    }
  }};
`;

export const Title = styled.h6`
  font-family: "UnimedSansSemi";
  font-size: 17px;
  color: #000;
  margin-bottom: 16px;
  text-align: left;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Download = styled.a.attrs({
  target: "_blank",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: 300ms ease;
  transform-origin: center center;

  svg {
    color: #5c5d62;
  }

  &:hover {
    transform: scale(1.5);
    color: #f47d35;
    svg {
      color: #f47d35;
    }
  }
`;

export const Info = styled.span`
  font-family: "UnimedSansRegular";
  font-size: 14px;
  color: #5c5d62;
  display: block;
`;
