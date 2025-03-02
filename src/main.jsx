import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/Style.css'
import App from './App.jsx'
import ShopContextProvider from './context/shopContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
   // </StrictMode>,
)
