import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Landing } from './Landing';
import { GlobalStyle } from '@daedongyeojido-fe-v3.5/design-token';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <GlobalStyle />
    <Landing />
  </StrictMode>
);
