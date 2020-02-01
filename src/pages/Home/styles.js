import styled from "styled-components";
import iconSearch from "../../assets/images/icon-search.png";

export const Container = styled.main`
  width: 100%;
  max-width: 1920px;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  position: relative;
`;

export const Content = styled.section`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px;
  position: relative;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 40px 0;
`;

export const Input = styled.input`
  flex: 1;
  padding: 16px;
  /* background-color: #efeeee; */
  background: #fff url(${iconSearch}) no-repeat 16px center;
  border: none;
  border: 1px #c9c9c9 solid;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(0, 0, 0, 0.1);
  /* box-shadow: -6px -6px 20px rgba(255, 255, 255, 0.5),
        6px 6px 20px rgba(209, 205, 199, 0.5),
        inset 0 2px 10px rgba(0, 0, 0, 0.15); */
  font-family: "UnimedSansRegular";
  font-size: 16px;
  padding-left: 48px;
`;

export const Filter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px #d5d5d5 solid;
  margin-bottom: 40px;
`;

export const MonthTitle = styled.h2`
  display: flex;
  align-items: center;
  width: max-content;
  font-size: 25px;
  text-transform: capitalize;
  color: #000;
  position: relative;

  .icon-spin {
    color: #999;
    position: absolute;
    right: -48px;
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

export const Options = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionButton = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "UnimedSansSemi";
  font-size: 16px;
  color: #2e2e2e;
  margin-right: 40px;
  position: relative;
  transition: 300ms ease;

  &::after {
    content: "";
    display: block;
    background: ${({ active }) => (active ? "#f47d35" : "#d5d5d5")};
    width: ${({ active }) => (active ? "100%" : "4px")};
    height: 4px;
    border-radius: 2px;
    position: absolute;
    bottom: -24px;
    transition: 300ms ease;
  }
  &:hover {
    color: #f47d35;
    &::after {
      width: 80%;
      background-color: #f47d35;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const WrapFiles = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
  width: 100%;
`;

export const NotFound = styled.h2`
  font-family: "UnimedSansRegular";
  font-size: 16px;
  color: #ccc;
`;
