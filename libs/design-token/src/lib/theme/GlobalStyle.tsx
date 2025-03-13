import { Global, css } from '@emotion/react';
import '@fontsource/pretendard';

const style = css`
  body {
    font-family: 'Pretendard';
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: unset;
    list-style: none;
    font-style: normal;
    font-family: 'Pretendard';
    text-decoration: none;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};
