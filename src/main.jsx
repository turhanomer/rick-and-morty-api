import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RickAndMortyApp from './components/Table.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RickAndMortyApp />
  </StrictMode>,
)
