// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import router from './routes/Router.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <RouterProvider router={router} />
//   </StrictMode>,
// )


// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css'; // TailwindCSS / custom styles
import router from './routes/Router';
import { RouterProvider } from 'react-router';
import './App.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
