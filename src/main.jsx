import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Landing.css'
import App from './LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
