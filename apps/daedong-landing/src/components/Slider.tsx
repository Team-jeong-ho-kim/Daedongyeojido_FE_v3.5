import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  slider1Icon,
  slider2Icon,
  slider3Icon,
  slider4Icon,
  slider5Icon,
  leftArrowIcon,
  rightArrowIcon,
} from '@daedongyeojido-fe-v3.5/ui';

export const Slider = () => {
  const slides = [
    slider1Icon,
    slider2Icon,
    slider3Icon,
    slider4Icon,
    slider5Icon,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animating, setAnimating] = useState(false);

  const handlePrev = () => {
    if (animating) return;

    setDirection('prev');
    setAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (animating) return;

    setDirection('next');
    setAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleIndicatorClick = (index: any) => {
    if (animating || index === currentSlide) return;

    setDirection(index > currentSlide ? 'next' : 'prev');
    setAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <SliderContainer>
      <SlideViewport>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            isVisible={index === currentSlide}
            direction={direction}
            animating={animating}
          >
            <SlideImage src={slide} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SlideViewport>

      <Controls>
        <ControlBtn onClick={handlePrev} disabled={animating}>
          <img src={leftArrowIcon} alt="Previous" />
        </ControlBtn>
        <ControlBtn onClick={handleNext} disabled={animating}>
          <img src={rightArrowIcon} alt="Next" />
        </ControlBtn>
      </Controls>

      <Indicators>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </Indicators>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SlideViewport = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Slide = styled.div<{
  isVisible: boolean;
  direction: string;
  animating: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;

  transform: ${(props) => {
    if (props.isVisible) {
      return 'translateX(0)';
    } else if (props.direction === 'next') {
      return props.animating ? 'translateX(-100%)' : 'translateX(100%)';
    } else {
      return props.animating ? 'translateX(100%)' : 'translateX(-100%)';
    }
  }};

  opacity: ${(props) => (props.isVisible || props.animating ? 1 : 0)};
  z-index: ${(props) => (props.isVisible ? 2 : 1)};
`;

const Controls = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
  z-index: 10;
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
  pointer-events: auto;

  &:hover {
    background-color: #061937;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 10;
`;

const Indicator = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? '#012661' : '#ccc')};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? '#012661' : '#999')};
  }
`;
