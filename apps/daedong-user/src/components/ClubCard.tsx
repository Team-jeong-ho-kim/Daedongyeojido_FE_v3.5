import styled from '@emotion/styled';
import { infoIcon } from '@daedongyeojido-fe-v3.5/ui';

export const ClubCard = () => {
  return (
    <ClubCardContainer>
      <ImageContainer>
        <CardImage src={infoIcon} alt="Club info" />
      </ImageContainer>
      <ContentContainer>
        <ClubName>Info</ClubName>
        <IntroClub>
          동아리설명동아리설명동아리설명동아리설리설명동아리설리설명동아리설
        </IntroClub>
        <CategoryContainer>
          <Category>{'# 프론트'}</Category>
          <Category>{'# 디자이너'}</Category>
        </CategoryContainer>
      </ContentContainer>
    </ClubCardContainer>
  );
};

const Category = styled.div`
  font-size: 14px;
  color: #969393;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const IntroClub = styled.div`
  width: 280px;
  font-size: 14px;
  color: #969393;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ClubName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #121121;
  margin-top: 5px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding: 5px;
  gap: 8px;
`;

const ClubCardContainer = styled.div`
  width: 100%;
  max-width: 370px;
  height: 280px;
  border-radius: 10px;
  box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.1);
  padding: 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;
