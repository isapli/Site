import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css' 
// (Nota: se der erro na linha acima depois, é só apagar ela, mas geralmente projetos do Figma têm essa pasta)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)