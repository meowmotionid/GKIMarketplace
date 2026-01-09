
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, RefreshCcw, Info, Store } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useApp } from '../store/AppContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Produk tidak ditemukan</h2>
        <Link to="/" className="mt-4 text-indigo-600 font-bold hover:underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.harga);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-indigo-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali Belanja
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
            <img 
              src={product.gambar[selectedImage]} 
              alt={product.nama_produk} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.gambar.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? 'border-indigo-600 scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              {product.kategori}
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.nama_produk}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                <span className="ml-2 text-sm text-gray-600 font-bold">4.9</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500 font-medium">85 Ulasan</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-green-600 font-bold">Stok Tersedia</span>
            </div>
          </div>

          <div className="mb-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <span className="text-gray-500 text-sm block mb-1">Harga Terbaik</span>
            <div className="text-4xl font-black text-indigo-600">{formattedPrice}</div>
          </div>

          <div className="prose prose-indigo mb-10">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Deskripsi Produk</h4>
            <p className="text-gray-600 leading-relaxed">{product.deskripsi}</p>
          </div>

          <div className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm mr-4">
              <Store className="w-6 h-6" />
            </div>
            <div className="flex-grow">
              <span className="text-xs text-gray-400 block font-medium">Penjual</span>
              <Link to={`/seller/${product.seller_id}`} className="font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                {product.seller_name || 'Toko GKI Member'}
              </Link>
            </div>
            <Link to={`/seller/${product.seller_id}`} className="px-4 py-2 bg-white text-gray-700 text-xs font-bold rounded-lg border border-gray-200 hover:bg-gray-50">
              Kunjungi Toko
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50/50">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-xs text-gray-700 font-medium">Garansi Kualitas</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-blue-50/50">
              <RefreshCcw className="w-5 h-5 text-blue-600" />
              <span className="text-xs text-gray-700 font-medium">Bisa Tukar Barang</span>
            </div>
          </div>

          <div className="mt-auto pt-8 flex space-x-4">
            <button 
              onClick={() => addToCart(product)}
              className="flex-grow flex items-center justify-center space-x-2 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Tambah ke Keranjang</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
