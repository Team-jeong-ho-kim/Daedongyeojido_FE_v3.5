import CreateDOM from 'react-dom/client';
import App from './App';

const root = CreateDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <App />
);
