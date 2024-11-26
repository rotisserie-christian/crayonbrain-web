import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteSwitch from './RouteSwitch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteSwitch />
  </StrictMode>,
)
