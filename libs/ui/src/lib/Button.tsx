import styled from '@emotion/styled';

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
    >
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<Omit<IButtonType, 'children'>>`
  transition: 0.3s ease-in;
  width: ${({ width }) => width};
  height: 54px;
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ isLogin, backgroundColor, opacity }) => {
    if (isLogin) return '#F0E5E5';
    if (!opacity) return backgroundColor;

    // HEX 색상이면 rgba로 변환
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
  color: ${({ isLogin, color }) => (isLogin ? '#4A4444' : color)};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ isLogin, backgroundHoverColor, opacity }) => {
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
