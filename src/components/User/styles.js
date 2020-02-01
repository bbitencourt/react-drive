import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserData = styled.div`
  display: flex;
  flex: 1;
`;

export const Avatar = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 44px;
  background: ${({ url }) =>
    url ? `#fff url(${url}) no-repeat center center` : "#fff"};
  border: 1px #f0e9dc solid;
  margin-right: 16px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h1`
  font-size: 25px;
  color: #000;
`;

export const Group = styled.h5`
  font-size: 21px;
  color: #f47d35;
  /* margin-bottom: 4px; */
`;

export const Role = styled.span`
  font-family: "UnimedSansRegular";
  font-size: 16px;
  color: #5c5d62;
`;

export const Logout = styled.button.attrs({
  type: "button",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "UnimedSansSemi";
  font-size: 16px;
  color: #000;
  position: relative;
  transition: 300ms ease;

  &::after {
    content: "";
    display: block;
    background: #000;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    position: absolute;
    bottom: -8px;
    transition: 300ms ease;
  }
  &:hover {
    color: #f47d35;
    &::after {
      width: 100%;
      background-color: #f47d35;
    }
  }
`;
