// products.js
const PRODUCTS = [
   { id: 'p1', name: 'iPhone 15 Pro', price: 119900, image: 'https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg', desc: 'Latest Apple iPhone 15 Pro with A17 chip.' },
  { id: 'p2', name: 'Samsung Galaxy S24', price: 89999, image: 'https://m.media-amazon.com/images/I/81M4zm2+0FL._AC_UY327_FMwebp_QL65_.jpg', desc: 'Flagship Samsung phone with great camera.' },
  { id: 'p3', name: 'Noise Headphones', price: 2999, image: 'https://m.media-amazon.com/images/I/517lSvEVVsL._AC_UY327_FMwebp_QL65_.jpg', desc: 'Wireless over-ear headphones.' },
  { id: 'p4', name: 'Wooden Chair', price: 3499, image: 'https://m.media-amazon.com/images/I/71r+dlqgg0L._AC_UL480_FMwebp_QL65_.jpg', desc: 'Comfortable wooden chair for home.' },
  { id: 'p5', name: 'Men T-Shirt', price: 499, image: 'https://m.media-amazon.com/images/I/713n+TxyfCL._AC_UL480_FMwebp_QL65_.jpg', desc: '100% cotton men t-shirt.' },
  { id: 'p6', name: 'Blender', price: 2499, image: 'https://m.media-amazon.com/images/I/716Hcxia3SL._AC_UY327_FMwebp_QL65_.jpg', desc: 'Kitchen blender for smoothies.' },
  { id: 'p7', name: 'Sneakers', price: 3299, image: 'https://m.media-amazon.com/images/I/41JCSC7Pd7L._AC_UL480_FMwebp_QL65_.jpg', desc: 'Sporty shoes for daily use.' },
  { id: 'p8', name: 'Watch', price: 5999, image: 'https://m.media-amazon.com/images/I/61a2n5T8LiL._AC_UL480_FMwebp_QL65_.jpg', desc: 'Stylish analog watch.' },
  // New products...
  { id: 'p9', name: 'Laptop Stand', price: 1999, image: 'https://m.media-amazon.com/images/I/81g1g1g1g1L._AC_SL1500_.jpg', desc: 'Ergonomic laptop stand for better posture.' },
  { id: 'p10', name: 'Wireless Mouse', price: 1299, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Comfortable wireless mouse for daily use.' },
  { id: 'p11', name: 'Gaming Keyboard', price: 3499, image: 'https://m.media-amazon.com/images/I/71g1g1g1g1L._AC_SL1500_.jpg', desc: 'Mechanical gaming keyboard with RGB lighting.' },
  { id: 'p12', name: 'Smartwatch', price: 7999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Feature-rich smartwatch with fitness tracking.' },
  { id: 'p13', name: 'Portable Charger', price: 1499, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'High-capacity portable charger for devices.' },
  { id: 'p14', name: 'Bluetooth Speaker', price: 2999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Compact Bluetooth speaker with great sound.' },
  { id: 'p15', name: 'Action Camera', price: 19999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Waterproof action camera for adventures.' },
  { id: 'p16', name: 'VR Headset', price: 24999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Immersive virtual reality headset.' },
  { id: 'p17', name: 'Wireless Earbuds', price: 3999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'True wireless earbuds with noise cancellation.' },
  { id: 'p18', name: 'Smart Home Hub', price: 4999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Central hub for smart home devices.' },
  { id: 'p19', name: 'Electric Kettle', price: 1999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Fast boiling electric kettle.' },
  { id: 'p20', name: 'Air Fryer', price: 5999, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Healthy air fryer for cooking.' },
  { id: 'p21', name: 'Coffee Maker', price: 3499, image: 'https://m.media-amazon.com/images/I/61g1g1g1g1L._AC_SL1500_.jpg', desc: 'Automatic coffee maker for fresh brews.' },

];
