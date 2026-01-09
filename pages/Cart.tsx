
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useApp } from '../store/AppContext';

const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useApp();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Keranjang Masih Kosong</h2>
        <p className="text-gray-500 mb-8 text-center max-w-sm">
          Sepertinya Anda belum menambahkan produk apapun ke dalam keranjang belanja.
        </p>
        <Link to="/" className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Keranjang Belanja</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow gap-6">
              <div className="w-full sm:w-32 aspect-square rounded-2xl overflow-hidden bg-gray-50">
                <img src={item.gambar[0]} alt={item.nama_produk} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="mb-1">
                  <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{item.kategori}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.nama_produk}</h3>
                <p className="text-gray-400 text-sm mb-3">Penjual: {item.seller_name || 'Toko Member'}</p>
                <div className="text-xl font-black text-gray-900">{formatPrice(item.harga)}</div>
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-6 border-t sm:border-t-0 pt-4 sm:pt-0">
                <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100 p-1">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-bold text-gray-900">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Belanja</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-500">
                <span>Total Barang</span>
                <span className="font-bold text-gray-900">{cart.reduce((acc, i) => acc + i.quantity, 0)} Items</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Ongkos Kirim</span>
                <span className="text-green-600 font-bold">Dihitung di checkout</span>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total Harga</span>
                <span className="text-2xl font-black text-indigo-600">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="w-full flex items-center justify-center space-x-2 py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
            >
              <span>Lanjut ke Checkout</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-gray-400">
              <ShoppingBag className="w-4 h-4" />
              <span>Belanja aman dengan sistem WhatsApp GKI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
