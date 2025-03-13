import styled from '@emotion/styled';
import { useRef } from 'react';
import { Button, cardsIcon, bottomArrowIcon } from '@daedongyeojido-fe-v3.5/ui';
import { useInterSectionObserve } from '@daedongyeojido-fe-v3.5/hooks';
import { Slider, ControlClub, Checking, Ending } from './components';

export const Landing = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const introusRef = useRef<HTMLDivElement>(null);
  const isInViewport = useInterSectionObserve(introRef);
  const isCardViewport = useInterSectionObserve(cardRef);
  const isIntrousViewport = useInterSectionObserve(introusRef);

  return (
    <LandingContainer>
      <Ment>
        <div>동아리의 모든 것</div>
        <Bottom>대동여지도에서 쉽고 간편하게</Bottom>
        <Button children="로그인 하기" isLogin={true} width="200px" />
      </Ment>
      <SliderWrapper>
        <Slider />
        <img className="arrow" src={bottomArrowIcon} />
      </SliderWrapper>
      <IntroDaedong ref={introRef} className={isInViewport ? 'active' : ''}>
        <p>대덕소프트웨어마이스터고등학교의 전공동아리들을</p>
        <p>한눈에 조회하고 한 곳에서 관리하세요.</p>
        <p style={{ color: '#FF4A50' }}>
          이제껏 경험 못 했던 쉽고 편리한 전공동아리 서비스,
        </p>
        <p>대동여지도와 함께라면 당신의 전공동아리가 새로워질 거예요.</p>
      </IntroDaedong>
      <BottomField>
        <IntroUs ref={introusRef} className={isIntrousViewport ? 'active' : ''}>
          <p>전공동아리</p>
          <p style={{ color: '#FF4A50' }}>관리의 모든 것</p>
          <p>하나로 관리하다</p>
        </IntroUs>
        <Cards ref={cardRef} className={isCardViewport ? 'active' : ''}>
          <img src={cardsIcon} />
        </Cards>
      </BottomField>
      <ControlClub />
      <Checking />
      <Ending />
    </LandingContainer>
  );
};

const IntroUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.1;
  transition: opacity 3s ease-out;

  &.active {
    opacity: 1;
  }
`;

const Cards = styled.div`
  width: 80%;
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity 7s ease-out, transform 1.5s ease-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    margin-top: 8%;
    width: 100%;
    height: 100%;
  }
`;

const BottomField = styled.div`
  width: 100%;
  font-size: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  font-weight: bold;
  line-height: 110px;
`;

const IntroDaedong = styled.div`
  width: 100%;
  height: 750px;
  background-color: #fbf9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  font-weight: bold;
  line-height: 60px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 2s ease-out, transform 1.5s ease-out;

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SliderWrapper = styled.div`
  height: 800px;
  background: linear-gradient(#ffff, rgba(234, 74, 70, 0.2));
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 115px;
  overflow: hidden;

  .arrow {
    animation: bounce 0.6s 0.2s cubic-bezier(0, 0, 0.18, 0.99) infinite
      alternate;
  }

  @keyframes bounce {
    to {
      transform: translateY(-30px);
    }
  }
`;

const Bottom = styled.div`
  margin-bottom: 30px;
`;

const Ment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 55px;
  font-weight: bold;
  align-items: center;
  margin-top: 15%;
  animation: fadeInUp 1.5s ease-out forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LandingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;
