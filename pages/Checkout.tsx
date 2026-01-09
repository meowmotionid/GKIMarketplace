
import React, { useState } from 'react';
import { useApp } from '../store/AppContext';
import { MessageSquare, MapPin, Truck, CreditCard, ShoppingBag } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal, user } = useApp();
  const [formData, setFormData] = useState({
    nama: user?.nama || '',
    email: user?.email || '',
    phone: '',
    address: '',
    shipping: 'reguler',
    payment: 'whatsapp'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleCheckoutWhatsApp = () => {
    const message = `
*PESANAN BARU - GKI MARKETPLACE*
---------------------------------------
*Detail Pembeli:*
Nama: ${formData.nama}
Email: ${formData.email}
WhatsApp: ${formData.phone}
Alamat: ${formData.address}

*Pesanan:*
${cart.map(item => `- ${item.nama_produk} (${item.quantity}x) @ ${formatPrice(item.harga)}`).join('\n')}

*Metode Pengiriman:* ${formData.shipping.toUpperCase()}
*Metode Pembayaran:* ${formData.payment.toUpperCase()}

*TOTAL TAGIHAN: ${formatPrice(cartTotal)}*
---------------------------------------
Mohon segera diproses, terima kasih!
`.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`; // Replace with actual seller phone
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10">Selesaikan Pembayaran</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Informasi Pengiriman</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                <input 
                  type="text" name="nama" value={formData.nama} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="Masukkan nama..."
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp / Telepon</label>
                <input 
                  type="text" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="Contoh: 0812xxxx"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">Alamat Lengkap</label>
              <textarea 
                name="address" rows={3} value={formData.address} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="Provinsi, Kota, Kecamatan, Nama Jalan..."
              ></textarea>
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <Truck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Metode Pengiriman</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['reguler', 'express'].map((m) => (
                <label key={m} className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${formData.shipping === m ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-100 bg-gray-50'}`}>
                  <input type="radio" name="shipping" value={m} checked={formData.shipping === m} onChange={handleChange} className="hidden" />
                  <div>
                    <span className="block font-bold text-gray-900 capitalize">{m}</span>
                    <span className="text-xs text-gray-500">{m === 'express' ? '1-2 Hari' : '3-5 Hari'}</span>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">Metode Pembayaran</h2>
            </div>
            <div className="space-y-4">
              <label className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${formData.payment === 'whatsapp' ? 'border-green-600 bg-green-50/50' : 'border-gray-100 bg-gray-50'}`}>
                <input type="radio" name="payment" value="whatsapp" checked={formData.payment === 'whatsapp'} onChange={handleChange} className="hidden" />
                <MessageSquare className="w-6 h-6 text-green-600 mr-4" />
                <div>
                  <span className="block font-bold text-gray-900">Checkout WhatsApp</span>
                  <span className="text-xs text-gray-500">Kirim detail pesanan langsung ke admin</span>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Order Review */}
        <div>
          <div className="bg-slate-900 text-white rounded-3xl p-8 sticky top-24 shadow-2xl">
            <h2 className="text-xl font-bold mb-8">Tinjau Pesanan</h2>
            
            <div className="space-y-6 mb-10 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                    <img src={item.gambar[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-sm line-clamp-1">{item.nama_produk}</h4>
                    <p className="text-xs text-gray-400">{item.quantity} x {formatPrice(item.harga)}</p>
                  </div>
                  <div className="font-bold text-sm">{formatPrice(item.harga * item.quantity)}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-800">
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Ongkos Kirim</span>
                <span className="text-green-400 font-bold">Gratis Ongkir</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-bold">Total Pembayaran</span>
                <span className="text-3xl font-black text-indigo-400">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckoutWhatsApp}
              disabled={!formData.phone || !formData.address}
              className="w-full mt-10 flex items-center justify-center space-x-2 py-5 bg-green-500 text-white rounded-2xl font-black text-xl hover:bg-green-600 transition-all shadow-xl shadow-green-900/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Checkout ke WhatsApp</span>
            </button>
            {!formData.phone && (
              <p className="mt-4 text-center text-xs text-red-400">Silakan isi nomor WhatsApp dan alamat pengiriman.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
