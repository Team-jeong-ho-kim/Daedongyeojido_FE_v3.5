import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Banner1, Banner2, Banner3, Banner4 } from '@daedongyeojido-fe-v3.5/ui';

interface BannerTrackProps {
  $translateX: number;
  $transition: boolean;
}

interface IndicatorProps {
  $active: boolean;
}

export const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [translateX, setTranslateX] = useState(-100);
  const [useTransition, setUseTransition] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  const banners = [Banner1, Banner2, Banner3, Banner4];
  const totalBanners = banners.length;

  const allBanners = [
    banners[totalBanners - 1],
    ...banners,
    ...banners.slice(0, 1),
  ];

  useEffect(() => {
    if (isMoving) return;

    const interval = setInterval(() => {
      if (!isMoving) {
        handleNextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isMoving, currentBanner]);

  const handleNextSlide = () => {
    if (isMoving) return;

    setIsMoving(true);
    setUseTransition(true);

    const nextIndex = (currentBanner + 1) % totalBanners;
    setCurrentBanner(nextIndex);
    setTranslateX((prev) => prev - 100);

    setTimeout(() => {
      if (nextIndex === 0) {
        setUseTransition(false);
        setTranslateX(-100);
      }
      setIsMoving(false);
    }, 500);
  };

  const goToBanner = (index: number) => {
    if (index === currentBanner || isMoving) return;

    setIsMoving(true);
    setUseTransition(true);

    let distance;
    const directDistance = index - currentBanner;
    const wrapDistance =
      directDistance > 0
        ? directDistance - totalBanners
        : directDistance + totalBanners;

    // 더 짧은 경로 선택
    if (Math.abs(directDistance) <= Math.abs(wrapDistance)) {
      distance = directDistance;
    } else {
      distance = wrapDistance;
    }

    setCurrentBanner(index);
    setTranslateX((prev) => prev - distance * 100);

    setTimeout(() => {
      if (index === 0) {
        setUseTransition(false);
        setTranslateX(-100);
      }
      setIsMoving(false);
    }, 500);
  };

  return (
    <BannerSliderAll>
      <BannerContainer>
        <BannerTrack $translateX={translateX} $transition={useTransition}>
          {allBanners.map((Banner, index) => (
            <BannerItem key={`banner-clone-${index}`}>
              <Banner />
            </BannerItem>
          ))}
        </BannerTrack>
      </BannerContainer>

      <BannerIndicators>
        {banners.map((_, index) => (
          <Indicator
            key={index}
            $active={index === currentBanner}
            onClick={() => goToBanner(index)}
          />
        ))}
      </BannerIndicators>
    </BannerSliderAll>
  );
};

const BannerSliderAll = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  overflow: hidden;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

// 배너 트랙 컴포넌트 - 조건부 트랜지션 적용
const BannerTrack = styled.div<BannerTrackProps>`
  display: flex;
  height: 100%;
  transform: translateX(${(props) => props.$translateX}%);
  transition: ${(props) =>
    props.$transition ? 'transform 0.5s ease' : 'none'};
`;

// 배너 아이템
const BannerItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
`;

const BannerIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  z-index: 10;
  padding: 10px 0;
`;

const Indicator = styled.div<IndicatorProps>`
  width: ${(props) => (props.$active ? '20px' : '6px')};
  height: 6px;
  border-radius: ${(props) => (props.$active ? '12px' : '50%')};
  background-color: ${(props) =>
    props.$active ? '#F45851' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
`;
