import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { CartProvider } from './context/CartContext';  // <-- import CartProvider

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopProvider>
      <CartProvider>  {/* wrap App with CartProvider inside ShopProvider */}
        <App />
      </CartProvider>
    </ShopProvider>
  </BrowserRouter>
);
