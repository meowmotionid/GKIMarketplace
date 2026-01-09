
export type UserRole = 'user' | 'seller';

export interface User {
  id: string;
  nama: string;
  email: string;
  role: UserRole;
  created_at: string;
}

export interface Seller {
  id: string;
  user_id: string;
  nama_toko: string;
  deskripsi: string;
  created_at: string;
}

export type Category = 'Makanan' | 'Jasa' | 'Barang' | 'Desain';

export interface Product {
  id: string;
  seller_id: string;
  nama_produk: string;
  deskripsi: string;
  harga: number;
  kategori: Category;
  gambar: string[];
  created_at: string;
  seller_name?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  user_id: string;
  total_harga: number;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
}
