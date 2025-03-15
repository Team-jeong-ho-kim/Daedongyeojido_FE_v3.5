import styled from '@emotion/styled';
import { calendarIcon } from '@daedongyeojido-fe-v3.5/ui';
import { useRef } from 'react';
import { useInterSectionObserve } from '@daedongyeojido-fe-v3.5/hooks';

export const Ending = () => {
  const endingRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isEndingViewport = useInterSectionObserve(endingRef);
  const isImgViewport = useInterSectionObserve(imgRef);

  return (
    <EndingAll>
      <Ment ref={endingRef} className={isEndingViewport ? 'active' : ''}>
        <SubTitle className="subtitle-animation">
          우리의 시간은 소중하니까
        </SubTitle>
        <Title className="title-animation">
          <div>복잡하고 귀찮은</div>
          <div>일들과 작별해보세요</div>
        </Title>
        <Title2 className="title2-animation">
          <div>큐알 코드가 붙은 포스터, 동아리 정보들</div>
          <div>면접 일정 관리, 공지, 합격 결과 알리기</div>
        </Title2>
        <Title2 className="title2-animation-delayed">
          대동여지도와 함께라면 더이상 번거롭지 않아요
        </Title2>
      </Ment>
      <Img ref={imgRef} className={isImgViewport ? 'active' : ''}>
        <img src={calendarIcon} className="floating" />
      </Img>
    </EndingAll>
  );
};

const Img = styled.div`
  margin-left: -50%;
  margin-top: -5%;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 3s ease-out, transform 3s ease-out;

  &.active {
    opacity: 1;
    transform: translateX(0);
  }

  img {
    max-width: 100%;
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.04));
  }

  .floating {
    animation: floating 3s ease-in-out infinite;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 750px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

const Title2 = styled.div`
  margin-top: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #6c6768;
  opacity: 0;
  transform: translateY(20px);

  &.title2-animation {
    animation: fadeInUp 1s ease-out 0.6s forwards;
  }

  &.title2-animation-delayed {
    animation: fadeInUp 1s ease-out 0.9s forwards;
  }

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
  opacity: 0;
  transform: translateY(30px);

  &.title-animation {
    animation: fadeInUp 1s ease-out 0.3s forwards;
  }

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
  opacity: 0;
  transform: translateY(20px);

  &.subtitle-animation {
    animation: fadeInUp 1s ease-out forwards;
  }

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const Ment = styled.div`
  width: 100%;
  min-width: 60%;
  z-index: 1;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-out, transform 1.2s ease-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 750px) {
    min-width: 100%;
  }
`;

const EndingAll = styled.div`
  width: 100%;
  padding-left: 12%;
  padding-top: 10%;
  display: flex;
  overflow: hidden;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 10px;
  }
`;
