import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  slide1Icon,
  slide2Icon,
  slide3Icon,
  leftArrowIcon,
  rightArrowIcon,
} from '@daedongyeojido-fe-v3.5/ui';

export const Slider = () => {
  const slides = [slide1Icon, slide2Icon, slide3Icon].filter(Boolean);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  const handlePrev = () => {
    let prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    while (!slides[prevIndex]) {
      prevIndex = prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
    }
    setCurrentSlide(prevIndex);
  };

  const handleNext = () => {
    let nextIndex = (currentSlide + 1) % slides.length;
    while (!slides[nextIndex]) {
      nextIndex = (nextIndex + 1) % slides.length;
    }
    setCurrentSlide(nextIndex);
  };

  return (
    <SliderContainer>
      <SlideWrapper currentSlide={currentSlide} totalSlides={slides.length}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideWrapper>

      {slides.length > 1 && (
        <Controls>
          <ControlBtn onClick={handlePrev}>
            <img src={leftArrowIcon} alt="Previous" />
          </ControlBtn>
          <ControlBtn onClick={handleNext}>
            <img src={rightArrowIcon} alt="Next" />
          </ControlBtn>
        </Controls>
      )}
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SlideWrapper = styled.div<{ currentSlide: number; totalSlides: number }>`
  display: flex;
  width: ${(props) => props.totalSlides * 100}vw;
  height: 110%;
  transition: transform 0.4s ease-in-out;
  transform: translateX(${(props) => -props.currentSlide * 100}vw);
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 100px;
  pointer-events: none;
`;

const ControlBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012661;
  transition: background-color 0.3s;
  cursor: pointer;
  border: none;
  z-index: 10;
  pointer-events: auto;

  &:hover {
    background-color: #061937;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;
