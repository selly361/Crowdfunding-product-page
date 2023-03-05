import { Nav, StyledHeader, StyledNav } from './Header.styles'

import { LogoIcon } from 'assets'
import React from 'react'

function Header() {
  return (
    <StyledHeader>
      <LogoIcon />
      <StyledNav>
        <Nav href="#">About</Nav>
        <Nav href="#">Discover</Nav>
        <Nav href="#">Get Started</Nav>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header