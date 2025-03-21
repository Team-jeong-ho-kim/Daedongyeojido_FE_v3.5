import styled from '@emotion/styled';
import { BannerSlider, Footer } from '@daedongyeojido-fe-v3.5/ui';
import { ClubCard } from '../components/ClubCard';

export const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <BannerSlider />
        <ClubListContainer>
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
          <ClubCard />
        </ClubListContainer>
      </MainPageContainer>
      <Footer />
    </>
  );
};

const MainPageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const ClubListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 30px;
  padding: 10% 5%;
  box-sizing: border-box;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
