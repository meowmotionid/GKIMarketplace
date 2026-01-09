
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './store/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sellers from './pages/Sellers';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import SellerDashboard from './pages/SellerDashboard';

// Login Mock Page
const Login: React.FC = () => {
  const { setUser, setRole } = useApp();
  
  const handleLogin = (role: 'user' | 'seller') => {
    setUser({
      id: 'u1',
      nama: role === 'seller' ? 'Admin Warung' : 'Andi Saputra',
      email: role === 'seller' ? 'admin@gki.com' : 'andi@gmail.com',
      role: role,
      created_at: new Date().toISOString()
    });
    setRole(role);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-10 text-center">
        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-black text-3xl">G</span>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Selamat Datang</h2>
        <p className="text-gray-500 mb-10">Pilih akses masuk Anda untuk melanjutkan.</p>
        
        <div className="space-y-4">
          <button 
            onClick={() => handleLogin('user')}
            className="w-full flex items-center justify-center space-x-3 py-4 border-2 border-gray-100 rounded-2xl font-bold hover:border-indigo-600 hover:bg-indigo-50 transition-all group"
          >
            <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-6 h-6" alt="google" />
            <span className="text-gray-700">Masuk sebagai Pembeli</span>
          </button>
          
          <button 
             onClick={() => handleLogin('seller')}
            className="w-full flex items-center justify-center space-x-3 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200"
          >
            <span className="text-white">Masuk sebagai Penjual</span>
          </button>
        </div>
        
        <p className="mt-8 text-xs text-gray-400">
          Dengan masuk, Anda menyetujui Syarat & Ketentuan GKI Marketplace.
        </p>
      </div>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  const { user } = useApp();

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={user?.role === 'seller' ? <SellerDashboard /> : <Navigate to="/" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
};

export default App;
