
import React, { useState } from 'react';
// Added missing Link import from react-router-dom
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, ShieldCheck, Zap } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-50"
            alt="Hero background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold mb-6 backdrop-blur-md border border-indigo-500/30">
              Marketplace Terlengkap untuk Komunitas Jemaat GKI
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Belanja Apapun di <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">GKI Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Dapatkan produk makanan, jasa profesional, barang harian, dan desain berkualitas dalam satu platform yang aman and terpercaya.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#shop" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30">
                Mulai Belanja <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                Jadilah Penjual
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Pengiriman Cepat', desc: 'Layanan antar sampai ke depan pintu Anda.' },
              { icon: ShieldCheck, title: 'Transaksi Aman', desc: 'Sistem pembayaran terproteksi 100%.' },
              { icon: ShoppingBag, title: 'Produk Terbaik', desc: 'Hanya produk terkurasi dari penjual terpercaya.' },
              { icon: Zap, title: 'Respon Kilat', desc: 'Hubungi penjual langsung via WhatsApp.' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Filter */}
      <section id="shop" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Eksplorasi Produk</h2>
              <p className="text-gray-500">Temukan ribuan produk dari berbagai kategori sesuai kebutuhan Anda.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['Semua', ...CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                      : 'bg-white text-gray-600 border border-gray-100 hover:border-indigo-200'
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
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Belum ada produk untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl gradient-bg p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Punya Produk Hebat? Mulai Jualan Sekarang!</h2>
            <p className="text-lg text-indigo-100 mb-10">
              Bergabunglah dengan ribuan penjual lainnya di GKI Marketplace dan perluas jangkauan pasar Anda secara instan.
            </p>
            {/* Fix: Use Link from react-router-dom */}
            <Link to="/register-seller" className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-indigo-900/20">
              Daftar Sebagai Penjual
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              {/* Fix: Use Link from react-router-dom */}
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="font-extrabold text-xl">GKI Marketplace</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                E-commerce terbaik untuk mendukung UMKM dan komunitas jemaat GKI dalam bertransaksi dengan aman dan nyaman.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Kategori</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {/* Fix: Use Link from react-router-dom */}
                <li><Link to="/category/makanan" className="hover:text-indigo-400">Makanan</Link></li>
                <li><Link to="/category/jasa" className="hover:text-indigo-400">Jasa</Link></li>
                <li><Link to="/category/barang" className="hover:text-indigo-400">Barang</Link></li>
                <li><Link to="/category/desain" className="hover:text-indigo-400">Desain</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Perusahaan</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {/* Fix: Use Link from react-router-dom */}
                <li><Link to="/about" className="hover:text-indigo-400">Tentang Kami</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400">Kontak</Link></li>
                <li><Link to="/terms" className="hover:text-indigo-400">Syarat & Ketentuan</Link></li>
                <li><Link to="/privacy" className="hover:text-indigo-400">Kebijakan Privasi</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Dapatkan info promo terbaru langsung di email Anda.</p>
              <div className="flex">
                <input type="email" placeholder="Email Anda" className="bg-slate-800 border-none rounded-l-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 w-full" />
                <button className="bg-indigo-600 px-4 py-3 rounded-r-xl hover:bg-indigo-700 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-800 text-center text-gray-500 text-sm">
            &copy; 2026 GKI Marketplace. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
