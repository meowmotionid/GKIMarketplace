
import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ArrowRight, Star, Users } from 'lucide-react';
import { MOCK_SELLERS } from '../constants';

const Sellers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Penjual Terverifikasi</h1>
        <p className="text-gray-500 text-lg">
          Dukung UMKM lokal dengan berbelanja langsung dari para penjual pilihan kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SELLERS.map((seller) => (
          <div key={seller.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col group">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Store className="w-8 h-8" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">{seller.nama_toko}</h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-gray-500">4.9 Terpercaya</span>
                </div>
              </div>
            </div>

            <p className="text-gray-500 mb-8 flex-grow leading-relaxed">
              {seller.deskripsi}
            </p>

            <div className="flex items-center space-x-4 mb-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1.5" />
                <span>1.2k Pelanggan</span>
              </div>
              <span>•</span>
              <div>
                <span>Sejak {new Date(seller.created_at).getFullYear()}</span>
              </div>
            </div>

            <Link 
              to={`/seller/${seller.id}`}
              className="flex items-center justify-center space-x-2 py-4 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all"
            >
              <span>Lihat Produk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;
