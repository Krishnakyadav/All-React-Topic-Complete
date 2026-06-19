import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>   strictmode react development  mode me components ko 2 baar render karta hai taaki side effects aur bug pakde ja saken
  //   <App />
  // </StrictMode>,
  <App/>
)
