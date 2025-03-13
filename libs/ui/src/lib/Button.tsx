import styled from '@emotion/styled';

interface IButtonType {
  children: string;
  isLogin?: boolean;
  width?: string;
  backgroundColor?: string;
  color?: string;
  backgroundHoverColor?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  isLogin = false,
  onClick,
  width = '100%',
  backgroundColor = '#FE8178',
  color = 'black',
  backgroundHoverColor = '#cac7c6',
}: IButtonType) => {
  return (
    <BtnContainer
      isLogin={isLogin}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      backgroundHoverColor={backgroundHoverColor}
      onClick={onClick}
    >
      {children}
    </BtnContainer>
  );
};

const BtnContainer = styled.button<Omit<IButtonType, 'children'>>`
  transition: 0.3s ease-in;
  width: ${({ width }) => width};
  height: 54px;
  border-radius: 20px;
  background-color: ${({ isLogin, backgroundColor }) =>
    isLogin ? '#F0E5E5' : backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isLogin, color }) => (isLogin ? '#4A4444' : color)};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: ${({ isLogin, backgroundHoverColor }) =>
      isLogin ? '#dfdfdf' : backgroundHoverColor};
  }
`;
