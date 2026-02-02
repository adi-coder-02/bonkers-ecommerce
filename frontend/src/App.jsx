import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import Register from './pages/Register'; // Make sure this path and filename is exact


// Admin pages
import Dashboard from './pages/admin/Dashboard';
import ProductList from './pages/admin/ProductList';
import AddProduct from './pages/admin/AddProduct';
import OrderList from './pages/admin/OrderList';
import UserList from './pages/admin/UserList';

//
import ProductDetail from './components/ProductDetail';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

//
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      {/* Optionally include Navbar here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
        <Route path="/order/:id" element={<OrderDetailsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        


        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/orders" element={<OrderList />} />
        <Route path="/admin/users" element={<UserList />} />
      </Routes>
      
      {/* Optionally include Footer here */}
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
