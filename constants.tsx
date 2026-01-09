
import { Product, Category, Seller } from './types';

export const CATEGORIES: Category[] = ['Makanan', 'Jasa', 'Barang', 'Desain'];

export const MOCK_SELLERS: Seller[] = [
  { id: 's1', user_id: 'u1', nama_toko: 'Warung GKI', deskripsi: 'Penyedia makanan nusantara terbaik.', created_at: '2023-01-01' },
  { id: 's2', user_id: 'u2', nama_toko: 'Tech Design', deskripsi: 'Jasa desain grafis dan web modern.', created_at: '2023-02-01' },
  { id: 's3', user_id: 'u3', nama_toko: 'Toko Serba GKI', deskripsi: 'Segala kebutuhan harian Anda ada di sini.', created_at: '2023-03-01' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    seller_id: 's1',
    nama_produk: 'Nasi Goreng Spesial',
    deskripsi: 'Nasi goreng dengan bumbu rahasia dan topping melimpah.',
    harga: 25000,
    kategori: 'Makanan',
    gambar: ['https://picsum.photos/seed/nasi/600/400'],
    created_at: '2023-01-10',
    seller_name: 'Warung GKI'
  },
  {
    id: 'p2',
    seller_id: 's2',
    nama_produk: 'Logo Branding Kit',
    deskripsi: 'Desain logo profesional untuk startup Anda.',
    harga: 500000,
    kategori: 'Desain',
    gambar: ['https://picsum.photos/seed/design/600/400'],
    created_at: '2023-02-15',
    seller_name: 'Tech Design'
  },
  {
    id: 'p3',
    seller_id: 's3',
    nama_produk: 'Meja Lipat Kayu',
    deskripsi: 'Meja praktis untuk kerja atau belajar.',
    harga: 150000,
    kategori: 'Barang',
    gambar: ['https://picsum.photos/seed/table/600/400'],
    created_at: '2023-03-05',
    seller_name: 'Toko Serba GKI'
  },
  {
    id: 'p4',
    seller_id: 's2',
    nama_produk: 'Jasa Web Development',
    deskripsi: 'Pembuatan website custom dengan performa tinggi.',
    harga: 2000000,
    kategori: 'Jasa',
    gambar: ['https://picsum.photos/seed/code/600/400'],
    created_at: '2023-03-12',
    seller_name: 'Tech Design'
  },
  {
    id: 'p5',
    seller_id: 's1',
    nama_produk: 'Ayam Bakar Madu',
    deskripsi: 'Ayam pilihan dengan olesan madu murni.',
    harga: 35000,
    kategori: 'Makanan',
    gambar: ['https://picsum.photos/seed/chicken/600/400'],
    created_at: '2023-03-20',
    seller_name: 'Warung GKI'
  },
  {
    id: 'p6',
    seller_id: 's3',
    nama_produk: 'Lampu Belajar LED',
    deskripsi: 'Lampu terang dengan pelindung mata.',
    harga: 75000,
    kategori: 'Barang',
    gambar: ['https://picsum.photos/seed/lamp/600/400'],
    created_at: '2023-03-25',
    seller_name: 'Toko Serba GKI'
  }
];
