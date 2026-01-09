
import React, { useState } from 'react';
import { Plus, Edit, Trash2, LayoutDashboard, Package, ShoppingCart, DollarSign } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');
  
  // Simulated seller products (only showing s1 products for demo)
  const myProducts = MOCK_PRODUCTS.filter(p => p.seller_id === 's1');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-3xl border border-gray-100 p-6 space-y-2 shadow-sm">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl font-bold transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Overview</span>
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl font-bold transition-all ${activeTab === 'products' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Package className="w-5 h-5" />
              <span>Produk Saya</span>
            </button>
            <button 
              className="w-full flex items-center space-x-3 p-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Pesanan</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 capitalize">{activeTab === 'products' ? 'Manajemen Produk' : 'Dashboard Penjual'}</h1>
            {activeTab === 'products' && (
              <button className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                <Plus className="w-5 h-5" />
                <span>Tambah Produk</span>
              </button>
            )}
          </div>

          {activeTab === 'overview' ? (
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Total Pendapatan</span>
                  <div className="text-2xl font-black text-gray-900 mt-1">Rp 12.500.000</div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Pesanan Selesai</span>
                  <div className="text-2xl font-black text-gray-900 mt-1">142</div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">Total Produk</span>
                  <div className="text-2xl font-black text-gray-900 mt-1">{myProducts.length}</div>
                </div>
             </div>
          ) : (
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-900">Produk</th>
                    <th className="px-6 py-4 font-bold text-gray-900">Kategori</th>
                    <th className="px-6 py-4 font-bold text-gray-900">Harga</th>
                    <th className="px-6 py-4 font-bold text-gray-900 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {myProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-4">
                          <img src={product.gambar[0]} className="w-12 h-12 rounded-lg object-cover" />
                          <span className="font-bold text-gray-900">{product.nama_produk}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{product.kategori}</span>
                      </td>
                      <td className="px-6 py-4 font-bold">Rp {product.harga.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
