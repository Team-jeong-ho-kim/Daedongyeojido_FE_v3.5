import styled from '@emotion/styled';
import { useRef } from 'react';
import {
  curiosIcon,
  clubIcon,
  club2Icon,
  club3Icon,
  manageIcon,
} from '@daedongyeojido-fe-v3.5/ui';
import { useInterSectionObserve } from '@daedongyeojido-fe-v3.5/hooks';

export const Checking = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isTopInView = useInterSectionObserve(topRef);
  const isBottomInView = useInterSectionObserve(bottomRef);

  return (
    <CheckingAll>
      <Top ref={topRef} className={isTopInView ? 'active' : ''}>
        <Ment className="animate-left">
          <SubTitle>
            <img src={curiosIcon} />
            전공동아리 공고
          </SubTitle>
          <Title>
            <div>여러 전공동아리 공고를</div>
            <div>한 눈에 확인하세요</div>
          </Title>
          <Title2>
            <div>대덕SW고의 전공동아리 공고를</div>
            <div>쉽고 빠르게 확인할 수 있어요</div>
          </Title2>
        </Ment>
        <ClubImgContainer className="animate-right">
          <Img>
            <img src={clubIcon} />
          </Img>
          <Img2>
            <img src={club2Icon} />
          </Img2>
        </ClubImgContainer>
      </Top>

      <Bottom ref={bottomRef} className={isBottomInView ? 'active' : ''}>
        <Img3 className="animate-left">
          <img src={club3Icon} />
        </Img3>
        <Ment2 className="animate-right">
          <SubTitle>
            <img src={manageIcon} />
            지원 관리
          </SubTitle>
          <Title>
            <div>전공동아리 지원 내역을</div>
            <div>한 눈에 확인해보세요.</div>
          </Title>
          <Title2>
            <div>마이페이지에서 자신이 지원한</div>
            <div>전공동아리를 쉽고 간편하게 확인할 수 있어요</div>
          </Title2>
        </Ment2>
      </Bottom>
    </CheckingAll>
  );
};

const Img3 = styled.div`
  margin-left: -5%;
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;

  @media (max-width: 750px) {
    margin-left: 0;
    margin-bottom: 30px;
    width: 100%;
  }
`;

const Img2 = styled.div`
  width: 100%;
  position: absolute;
  margin-top: -33%;
  margin-left: 20%;

  @media (max-width: 750px) {
    position: relative;
    margin-left: -10%;
    margin-top: 5px;
  }
`;

const Img = styled.div`
  width: 100%;
  margin-top: -8%;
  margin-left: -10%;

  @media (max-width: 750px) {
    margin-top: 0;
  }
`;

const ClubImgContainer = styled.div`
  position: relative;
  margin-left: -5%;
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
  transition-delay: 0.2s;

  @media (max-width: 800px) {
    margin-top: 30px;
    width: 100%;
  }
`;

const Title2 = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #6c6768;

  @media (max-width: 750px) {
    font-size: 20px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #524d4e;
  margin-top: 12px;
  line-height: 130%;

  @media (max-width: 750px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: #ff4a50;
  gap: 6px;

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const Ment = styled.div`
  width: 100%;
  min-width: 60%;
  z-index: 1;
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;

  @media (max-width: 750px) {
    min-width: 100%;
  }
`;

const Ment2 = styled.div`
  width: 100%;
  min-width: 60%;
  z-index: 1;
  margin-left: 8%;
  margin-top: -5%;
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 1.2s ease-out, transform 1.2s ease-out;
  transition-delay: 0.2s;

  @media (max-width: 750px) {
    margin-left: 0;
    margin-top: 0;
    min-width: 100%;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;

  &.active {
    .animate-left {
      opacity: 1;
      transform: translateX(0);
    }

    .animate-right {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Top = styled.div`
  margin-top: 15%;
  display: flex;
  margin-bottom: 25%;

  &.active {
    .animate-left {
      opacity: 1;
      transform: translateX(0);
    }

    .animate-right {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const CheckingAll = styled.div`
  width: 100%;
  background-color: #fbf9fa;
  padding: 0 12%;
  margin-top: 20%;
  overflow: hidden;

  @media (max-width: 750px) {
    padding: 0 5%;
  }
`;
