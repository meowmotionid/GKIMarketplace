
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Zap, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Category } from '../types';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Semua'>('Semua');

  const filteredProducts = activeCategory === 'Semua' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.kategori === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Vercel Optimized Visuals */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 scale-105 animate-pulse-slow">
          <img 
            src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 brightness-75"
            alt="Hero background" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-8 backdrop-blur-md border border-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>Marketplace Terlengkap untuk Komunitas Jemaat GKI</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Belanja Aman <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">
                Penuh Berkat
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
              Platform modern yang menghubungkan produk berkualitas hasil karya jemaat untuk mendukung pertumbuhan ekonomi komunitas kita bersama.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a href="#shop" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center hover:bg-indigo-500 hover:translate-y-[-2px] active:translate-y-0 transition-all shadow-2xl shadow-indigo-600/30">
                Mulai Belanja <ArrowRight className="ml-3 w-5 h-5" />
              </a>
              <button className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all">
                Daftar Penjual
              </button>
            </div>

            <div className="mt-16 flex items-center space-x-8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-slate-900" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">
                <span className="text-white font-bold">500+</span> Jemaat telah bergabung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Kirim Cepat', color: 'text-blue-500', bg: 'bg-blue-50' },
              { icon: ShieldCheck, title: 'Garansi Aman', color: 'text-green-500', bg: 'bg-green-50' },
              { icon: ShoppingBag, title: 'Produk Pilihan', color: 'text-orange-500', bg: 'bg-orange-50' },
              { icon: Zap, title: 'Order Langsung', color: 'text-indigo-500', bg: 'bg-indigo-50' }
            ].map((f, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className={`p-3 rounded-xl ${f.bg} ${f.color}`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-gray-700">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Shop Section */}
      <section id="shop" className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Koleksi Jemaat GKI</h2>
              <p className="text-gray-500 text-lg leading-relaxed">Pilih kategori produk yang Anda butuhkan. Setiap pembelian Anda berdampak bagi komunitas.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
              {['Semua', ...CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                      : 'bg-transparent text-gray-500 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100 shadow-inner">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Belum ada produk</h3>
              <p className="text-gray-500 mt-2">Kategori ini akan segera hadir dengan produk menarik.</p>
            </div>
          )}
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto rounded-[3rem] gradient-bg p-12 md:p-24 relative shadow-2xl shadow-indigo-500/40">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Kembangkan Usaha Anda Bersama Kami</h2>
              <p className="text-xl text-indigo-100 mb-12 leading-relaxed opacity-90">
                Punya keahlian jasa atau produk makanan enak? Mari bergabung menjadi penjual dan jangkau seluruh jemaat GKI di mana saja.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login" className="px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-900/20">
                  Daftar Sekarang
                </Link>
                <button className="px-10 py-5 bg-indigo-500/30 text-white rounded-2xl font-black text-lg backdrop-blur-md border border-white/20 hover:bg-indigo-500/40 transition-all">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            
            <div className="hidden lg:grid grid-cols-2 gap-6 rotate-3">
              <div className="space-y-6 translate-y-8">
                 <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 aspect-square flex flex-col justify-end">
                    <span className="text-4xl font-black text-white">100%</span>
                    <span className="text-indigo-200 font-bold uppercase tracking-wider text-xs">Aman & Terpercaya</span>
                 </div>
                 <div className="bg-white p-6 rounded-[2rem] shadow-xl aspect-square flex flex-col justify-end">
                    <Star className="text-yellow-400 w-10 h-10 mb-2 fill-yellow-400" />
                    <span className="text-slate-900 font-black text-2xl">Rating 4.9</span>
                    <span className="text-slate-400 text-xs font-bold">Kepuasan Jemaat</span>
                 </div>
              </div>
              <div className="space-y-6">
                 <div className="bg-indigo-400 p-6 rounded-[2rem] shadow-xl aspect-square flex flex-col justify-end">
                    <span className="text-4xl font-black text-white">1.5k</span>
                    <span className="text-indigo-100 font-bold uppercase tracking-wider text-xs">Transaksi Sukses</span>
                 </div>
                 <div className="bg-slate-900 p-6 rounded-[2rem] border border-white/10 aspect-square flex flex-col justify-end">
                    <div className="flex -space-x-2 mb-2">
                       {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-8 h-8 rounded-full border-2 border-slate-900"/>)}
                    </div>
                    <span className="text-white font-black text-2xl">Supportive</span>
                    <span className="text-indigo-300 text-xs font-bold">Komunitas Aktif</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Professional Vercel Standard */}
      <footer className="bg-slate-950 text-white pt-32 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="text-white font-black text-2xl">G</span>
                </div>
                <span className="font-black text-2xl tracking-tighter">GKI Marketplace</span>
              </Link>
              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-sm">
                E-commerce terbaik untuk mendukung UMKM dan komunitas jemaat GKI dalam bertransaksi dengan aman dan nyaman.
              </p>
              <div className="flex space-x-5">
                {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 transition-all border border-slate-800">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-black text-white mb-8 text-sm uppercase tracking-[0.2em]">Kategori</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-sm">
                <li><Link to="/" className="hover:text-indigo-400 transition-colors">Makanan & Minuman</Link></li>
                <li><Link to="/" className="hover:text-indigo-400 transition-colors">Jasa Profesional</Link></li>
                <li><Link to="/" className="hover:text-indigo-400 transition-colors">Barang Harian</Link></li>
                <li><Link to="/" className="hover:text-indigo-400 transition-colors">Desain Kreatif</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-black text-white mb-8 text-sm uppercase tracking-[0.2em]">Platform</h4>
              <ul className="space-y-5 text-gray-500 font-bold text-sm">
                <li><Link to="/sellers" className="hover:text-indigo-400 transition-colors">Daftar Penjual</Link></li>
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Tentang Kami</Link></li>
                <li><Link to="/faq" className="hover:text-indigo-400 transition-colors">Bantuan/FAQ</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Legalitas</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="font-black text-white mb-8 text-sm uppercase tracking-[0.2em]">Warta Update</h4>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">Berlangganan info produk baru dan promo jemaat.</p>
              <div className="relative">
                <input type="email" placeholder="Email Anda" className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-700" />
                <button className="absolute right-2 top-2 bottom-2 bg-indigo-600 px-4 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-600 text-sm font-bold">
              &copy; 2026 GKI Marketplace. All rights reserved.
            </p>
            <div className="flex space-x-10 text-xs text-gray-700 font-bold tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
