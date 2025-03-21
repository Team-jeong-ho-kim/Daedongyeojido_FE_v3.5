import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '@daedongyeojido-fe-v3.5/design-token';
import { BaseHeader } from '@daedongyeojido-fe-v3.5/ui';

export const AppLayout = () => {
  return (
    <>
      <BaseHeader />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <GlobalStyle />
    </>
  );
};

const MainContainer = styled.div`
  width: 100vw;
`;
