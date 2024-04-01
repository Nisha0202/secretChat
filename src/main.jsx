
// import Root from './routes/Root';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Entry from './pages/Entry';
// import SecretSpace from './pages/SecretSpace';

// import './index.css';

// const router = createBrowserRouter([
//   { path: '/', element: <Entry /> },
//   { path: '/space', element: <SecretSpace /> },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import Root from './routes/Root';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
