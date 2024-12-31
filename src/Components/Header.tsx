import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const RightContent = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>INSTYLE</Logo>
      <RightContent>English</RightContent>
    </HeaderContainer>
  );
};

export default Header;