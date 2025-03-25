import styled from '@emotion/styled';
import { GlobalStyle } from '@daedongyeojido-fe-v3.5/design-token';
import { Footer, error404Icon, BaseHeader } from '@daedongyeojido-fe-v3.5/ui';

export const ErrorPage = () => {
  return (
    <>
      <GlobalStyle />
      <BaseHeader />
      <Content>
        <Img src={error404Icon} alt="404" />
        <ErrorMent>죄송합니다. 해당 페이지를 찾을 수 없습니다.</ErrorMent>
      </Content>
      <Footer />
    </>
  );
};

const ErrorMent = styled.div`
  color: #4e5968;
  font-size: 35px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 150px;
  gap: 50px;
`;

const Img = styled.img`
  @media (max-width: 600px) {
    width: 300px;
  }
`;
