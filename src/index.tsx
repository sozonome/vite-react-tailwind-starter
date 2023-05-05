import * as React from 'react';
import ReactDOM from 'react-dom/client';

// fonts
import '@fontsource/plus-jakarta-sans/latin.css';
import '@/lib/styles/globals.css';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
