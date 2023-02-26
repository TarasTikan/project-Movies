import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: red;
  }
`;

export const NavList = styled('ul')`
  display: flex;
  list-style: none;
  gap: 20px;
  font-size: 18px;
  align-items: center;
  justify-self: center;
  line-height: 1.14;
  letter-spacing: 0.02em;
`;
