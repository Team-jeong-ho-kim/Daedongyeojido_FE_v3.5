import styled from '@emotion/styled';
import { GlobalStyle } from '@daedongyeojido-fe-v3.5/design-token';
import { logoIcon } from '@daedongyeojido-fe-v3.5/ui';
import { useNavigate } from 'react-router-dom';

export const BaseHeader = () => {

  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <LeftSection onClick={() => navigate('/')}>
          <TitleImg>
            <img src={logoIcon} />
          </TitleImg>
          대동여지도
        </LeftSection>
        <RightSection>
          <NavItem>공고</NavItem>
          <NavItem>동아리</NavItem>
          <UserIcon>🙂</UserIcon>
        </RightSection>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100vw;
  height: 70px;
  user-select: none;
  padding: 0 20px;

  @media (max-width: 600px) {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-left: 120px;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-left: 10px;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;

const TitleImg = styled.span`
  margin-right: 5px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 14px;
  color: #666;
  margin-right: 120px;

  @media (max-width: 600px) {
    gap: 15px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 30px;
    color: #666;
    margin-right: 0px;
  }
`;

const NavItem = styled.span`
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const UserIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-left: 10px;

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
    font-size: 12px;
    width: 24px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
  }
`;
