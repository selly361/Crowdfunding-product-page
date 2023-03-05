import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  padding: 48px 166px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNav = styled.nav`
  height: 16px;
  width: 225px;
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.a`
  font-family: "Commissioner";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: unset;
  transition: 1s ease filter;


  &:hover {
    filter: brightness(.88);
  }
`;
