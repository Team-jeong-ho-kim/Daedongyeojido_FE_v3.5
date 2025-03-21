import styled from '@emotion/styled';
import { banner4Icon, Button } from '@daedongyeojido-fe-v3.5/ui';

export const Banner4 = () => {
  return (
    <BannerAll>
      <Ment>
        <Top>
          <div>다양한 동아리를</div>
          <div>대동여지도를 통해 지원해보세요!</div>
        </Top>
        <BottomBtn>
          <Button
            backgroundColor="#ffffff"
            children="지원하러 가기"
            color="#ffffff"
            opacity="40%"
            borderRadius="127.7px"
          />
        </BottomBtn>
      </Ment>
      <Img>
        <img src={banner4Icon} />
      </Img>
    </BannerAll>
  );
};

const BottomBtn = styled.div`
  margin-top: 5%;
  border-radius: 127.7px;
  width: 200px;
  height: 60px;
`;

const Top = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Ment = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 480px) {
    width: 25%;
  }
`;

const BannerAll = styled.div`
  width: 100%;
  background: linear-gradient(to right, #7694ff, #d3a8f2);
  height: 330px;
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 480px) {
    height: 220px;
    padding: 0 5%;
  }
`;
