import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'

const HeaderContainer = styled.header`
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; */
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.img`
    height: 40px;
    width: auto;
`;

const RightContent = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo"></Logo>
      <RightContent>English</RightContent>
    </HeaderContainer>
  );
};

export default Header;