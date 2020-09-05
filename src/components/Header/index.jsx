import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";

import HeaderButton from "../RoundButton";
import ResponsiveImage from "../ResponsiveImage";

import LogoImage from '../../assets/images/Logo.jpg';

import { Container } from "./styles";

// import { Container } from './styles';

function Header() {
  return (
    <Container>
      <HeaderButton>
        <FiMenu />
      </HeaderButton>
      <ResponsiveImage src={LogoImage} alt={'Logo'} />
      <HeaderButton>
        <FiSearch />
      </HeaderButton>
    </Container>
  );
}

export default Header;