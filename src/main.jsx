import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './routes/App';
import ErrorPage from './error-page';
import SpellingPractice from './components/Pages/SpellingPractice';
import About from './components/Pages/About';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "practice",
    element: <SpellingPractice />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "play",
    element: <h1>Play</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
