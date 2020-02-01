import styled from "styled-components";
import logo from "../../assets/images/logo-aside.png";

export const Container = styled.aside`
  width: 100%;
  max-width: 255px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  background-color: #39254d;
  position: sticky;
  top: 0;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: "Logo",
})`
  width: max-content;
  height: max-content;
  margin-bottom: 32px;
`;

export const YearButton = styled.button.attrs({
  type: "button",
})`
  color: #766389;
  font-size: 14px;
  font-family: "UnimedSansSemi";
  padding-bottom: 8px;
  border-bottom: 1px #766389 solid;
  display: flex;
  cursor: default;

  svg {
    margin-right: 8px;
    color: #766389;
  }
`;

export const Months = styled.div`
  padding: 24px 0;
`;

export const MonthButton = styled.button.attrs({
  type: "button",
})`
  color: #979baa;
  font-size: 16px;
  font-family: "UnimedSansSemi";
  padding: 8px 0;
  display: flex;
  transition: 300ms ease;

  &:hover {
    color: #fff;
  }
`;
