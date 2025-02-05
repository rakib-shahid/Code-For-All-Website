import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

{projects.map((project, index) => (
  <ProjectCard
    key={index}
    {...project}
    reverse={index % 2 !== 0} // Alternates the layout for each project
  />
))}