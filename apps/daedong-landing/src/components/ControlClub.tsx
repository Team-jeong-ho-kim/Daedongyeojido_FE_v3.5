import styled from '@emotion/styled';
import { useRef } from 'react';
import { club4Icon } from '@daedongyeojido-fe-v3.5/ui';
import { useInterSectionObserve } from '@daedongyeojido-fe-v3.5/hooks';

export const ControlClub = () => {
  const controlClubRef = useRef<HTMLDivElement>(null);
  const isControlClubViewport = useInterSectionObserve(controlClubRef);

  return (
    <ControlClubAll
      ref={controlClubRef}
      className={isControlClubViewport ? 'active' : ''}
    >
      <div>
        <Title className="animate-element">등록 · 생성</Title>
        <Ment className="animate-element">
          <p>동아리 관리,</p>
          <p>등록부터 생성까지</p>
          <p>간편하게</p>
        </Ment>
      </div>
      <Img className="animate-element">
        <img src={club4Icon} />
      </Img>
      <GuideContainer className="animate-element">
        <Guide>
          <p>클릭 한 번으로 전공 동아리를</p>
          <p>쉽게 생성할 수 있어요.</p>
        </Guide>
      </GuideContainer>
    </ControlClubAll>
  );
};

const GuideContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -10%;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 3s ease-out, transform 3s ease-out;
`;

const Guide = styled.div`
  color: #6c6768;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-align: right;
  line-height: 30px;
  margin-right: 11%;
`;

const Img = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 2s ease-out, transform 2s ease-out;
  transition-delay: 0.3s;
  margin: 50px 0 100px 0;
  height: auto;
  padding-bottom: 50px;

  img {
    margin-top: 0;
    max-width: 85%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 1200px) {
    img {
      max-width: 75%;
    }
  }
`;

const Ment = styled.div`
  font-size: 60px;
  font-weight: bold;
  line-height: 80px;
  margin-top: 15px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  transition-delay: 0.2s;
`;

const Title = styled.p`
  color: #ff4a50;
  font-size: 28px;
  font-weight: bold;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  transition-delay: 0.1s;
`;

const ControlClubAll = styled.div`
  width: 100%;
  padding: 0 15%;
  margin-top: 300px;
  overflow: hidden;

  &.active {
    .animate-element {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
