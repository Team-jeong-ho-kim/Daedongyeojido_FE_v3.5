import styled from '@emotion/styled';
import {
  spreadArrowIcon,
  spreadTopArrowIcon,
} from '@daedongyeojido-fe-v3.5/ui';

interface IButtonType {
  children: string;
  isLogin?: boolean;
  width?: string;
  backgroundColor?: string;
  color?: string;
  backgroundHoverColor?: string;
  onClick?: () => void;
  opacity?: string;
  borderRadius?: string;
  isDetail?: boolean;
}

export const Button = ({
  children,
  isLogin = false,
  onClick,
  width = '100%',
  backgroundColor = '#FE8178',
  color = 'black',
  backgroundHoverColor = '#cac7c6',
  opacity,
  borderRadius = '20px',
  isDetail = false,
}: IButtonType) => {
  return (
    <BtnContainer
      isLogin={isLogin}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      backgroundHoverColor={backgroundHoverColor}
      onClick={onClick}
      opacity={opacity}
      borderRadius={borderRadius}
      isDetail={isDetail}
    >
      {children}
      {isDetail && (
        <IconWrapper
          src={
            children === '상세보기 접기' ? spreadTopArrowIcon : spreadArrowIcon
          }
        />
      )}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<Omit<IButtonType, 'children'>>`
  transition: 0.3s ease-in;
  width: ${({ width, isDetail }) => (isDetail ? 'auto' : width)};
  height: ${({ isDetail }) => (isDetail ? '40px' : '54px')};
  border-radius: ${({ borderRadius, isDetail }) =>
    isDetail ? '25px' : borderRadius};
  background-color: ${({ isLogin, backgroundColor, opacity, isDetail }) => {
    if (isDetail) return '#FF7F7F';
    if (isLogin) return '#F0E5E5';
    if (!opacity) return backgroundColor;
    if (backgroundColor?.startsWith('#')) {
      const r = parseInt(backgroundColor.slice(1, 3), 16);
      const g = parseInt(backgroundColor.slice(3, 5), 16);
      const b = parseInt(backgroundColor.slice(5, 7), 16);
      const alpha = parseFloat(opacity.replace('%', '')) / 100;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return backgroundColor;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isLogin, color, isDetail }) => {
    if (isDetail) return 'white';
    return isLogin ? '#4A4444' : color;
  }};
  font-size: ${({ isDetail }) => (isDetail ? '16px' : '20px')};
  font-weight: 600;
  cursor: pointer;
  padding: ${({ isDetail }) => (isDetail ? '0 20px' : '0')};
  &:hover {
    background-color: ${({
      isLogin,
      backgroundHoverColor,
      opacity,
      isDetail,
    }) => {
      if (isDetail) return '#FF6B6B';
      if (isLogin) return '#dfdfdf';
      if (!opacity) return backgroundHoverColor;
      if (backgroundHoverColor?.startsWith('#')) {
        const r = parseInt(backgroundHoverColor.slice(1, 3), 16);
        const g = parseInt(backgroundHoverColor.slice(3, 5), 16);
        const b = parseInt(backgroundHoverColor.slice(5, 7), 16);
        const alpha = parseFloat(opacity.replace('%', '')) / 100;
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }
      return backgroundHoverColor;
    }};
  }
`;

const IconWrapper = styled.img`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;
