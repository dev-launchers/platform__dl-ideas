import React from "react";
//import Link from "next/link";
import AccountDropdown from "./AccountDropdown";

import {
  HeaderBlock,
  Logo,
  LogoWrapper,
  LogoImageHolder,
  LogoImage,
  LogoWords,
  HeaderNav,
  NavEntry,
} from "./StyledHeader";

import { useUserDataContext } from "../../UserDataContext";
import HamburgerMenu from "../../components/common/HamburgerMenu";

export default function Header() {
  const { userData } = useUserDataContext();

  return (
    <HeaderBlock>
      <Logo>
        <LogoWrapper>
            <a href="/">
              <LogoImageHolder>
                <LogoImage />
              </LogoImageHolder>
              <LogoWords>Dev Launchers</LogoWords>
            </a>          
        </LogoWrapper>
      </Logo>
      <HeaderNav>
          <a href="/create">
            <NavEntry>CREATE</NavEntry>
          </a>
          <a href="/learn">
            <NavEntry>LEARN</NavEntry>
          </a>
        {/* }
          <Link href={"/play"} className="nav-link">
            <NavEntry>PLAY</NavEntry>
          </Link>
          { */}
          <a href="/support-us">
            <NavEntry>SUPPORT US</NavEntry>
          </a>
          <a href="/projects">
            <NavEntry>JOIN</NavEntry>
          </a>
      </HeaderNav>
      <div />
      <AccountDropdown userData={userData} />
      <HamburgerMenu />
    </HeaderBlock>
  );
}
