import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { banner2Icon, Button } from '@daedongyeojido-fe-v3.5/ui';

export const Banner2 = () => {
  const navigate = useNavigate();

  return (
    <BannerAll>
      <Ment>
        <Top>
          <div>동아리의 모든 것</div>
          <div>대동여지도에서 쉽고 간편하게</div>
        </Top>
        <BottomBtn>
          <Button
            backgroundColor="#ffffff"
            children="지원하러 가기"
            color="#ffffff"
            opacity="40%"
            borderRadius="127.7px"
            onClick={() => navigate('/job-mainBoard')}
          />
        </BottomBtn>
      </Ment>
      <Img>
        <img src={banner2Icon} />
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
  background: linear-gradient(to right, #e5a13c, #cfc1b4);
  height: 330px;
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 480px) {
    height: 220px;
    padding: 0 5%;
  }
`;
