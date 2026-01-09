
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../store/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.harga);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="relative overflow-hidden aspect-square">
        <img
          src={product.gambar[0]}
          alt={product.nama_produk}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
            {product.kategori}
          </span>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-1 mb-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-400 font-medium">4.8 (120 terjual)</span>
        </div>
        
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
            {product.nama_produk}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 line-clamp-2 mt-1 mb-4 h-10">
          {product.deskripsi}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400 block">Harga</span>
            <span className="text-lg font-extrabold text-indigo-600">{formattedPrice}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="p-3 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
