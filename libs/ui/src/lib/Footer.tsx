import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <FooterAll>
      <Main></Main>
    </FooterAll>
  );
};

const Main = styled.div``;

const FooterAll = styled.div`
  width: 100%;
  min-width: 600px;
  height: 220px;
  background-color: #303740;
  margin-top: 10%;
  overflow: hidden;
`;
