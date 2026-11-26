const cardData = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    inStock: true
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 3999,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    inStock: true
  },
  {
    id: 3,
    title: "Running Sneakers",
    price: 1899,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    inStock: false
  },
  {
    id: 4,
    title: "Minimalist Backpack",
    price: 1299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    inStock: true
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 3299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    inStock: true
  },
  {
    id: 6,
    title: "Wireless Gaming Mouse",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    inStock: true
  },
  {
    id: 7,
    title: "Classic Aviator Sunglasses",
    price: 999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    inStock: true
  },
  {
    id: 8,
    title: "Leather Analog Watch",
    price: 2799,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
    inStock: false
  },
  {
    id: 9,
    title: "Portable Bluetooth Speaker",
    price: 1799,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    inStock: true
  },
  {
    id: 10,
    title: "Canvas High-Top Shoes",
    price: 1599,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    inStock: true
  },
  {
    id: 11,
    title: "Ceramic Coffee Mug",
    price: 499,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500",
    inStock: true
  },
  {
    id: 12,
    title: "DSLR Camera Lens 50mm",
    price: 12499,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500",
    inStock: true
  },
  {
    id: 13,
    title: "Insulated Water Bottle",
    price: 699,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
    inStock: true
  },
  {
    id: 14,
    title: "Denim Casual Jacket",
    price: 2199,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500",
    inStock: false
  },
  {
    id: 15,
    title: "True Wireless Earbuds",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    inStock: true
  },
  {
    id: 16,
    title: "Minimalist Desk Lamp",
    price: 1199,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    inStock: true
  },
  {
    id: 17,
    title: "Leather Bifold Wallet",
    price: 799,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    inStock: true
  },
  {
    id: 18,
    title: "Yoga Exercise Mat",
    price: 899,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    inStock: true
  },
  {
    id: 19,
    title: "Retro Polaroid Camera",
    price: 5499,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    inStock: false
  },
  {
    id: 20,
    title: "Cotton Oversized Hoodie",
    price: 1699,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    inStock: true
  },
  {
    id: 21,
    title: "USB-C Multiport Hub",
    price: 1599,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
    inStock: true
  },
  {
    id: 22,
    title: "Suede Chelsea Boots",
    price: 3499,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500",
    inStock: true
  },
  {
    id: 23,
    title: "Indoor Ceramic Planter",
    price: 599,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
    inStock: true
  },
  {
    id: 24,
    title: "Aluminum Laptop Stand",
    price: 1099,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    inStock: true
  },
  {
    id: 25,
    title: "Adjustable Dumbbell Pair",
    price: 2999,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
    inStock: false
  },
  {
    id: 26,
    title: "Studio Condenser Microphone",
    price: 4299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500",
    inStock: true
  },
  {
    id: 27,
    title: "Travel Duffel Bag",
    price: 2299,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    inStock: true
  },
  {
    id: 28,
    title: "Smart Band Tracker",
    price: 1799,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
    inStock: true
  },
  {
    id: 29,
    title: "French Press Coffee Maker",
    price: 1399,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    inStock: true
  },
  {
    id: 30,
    title: "Graphic Crewneck T-Shirt",
    price: 799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    inStock: true
  },
  {
    id: 31,
    title: "Portable SSD 1TB",
    price: 6999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    inStock: true
  },
  {
    id: 32,
    title: "Sport Chronograph Watch",
    price: 4599,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
    inStock: false
  },
  {
    id: 33,
    title: "Leather Loafers",
    price: 2499,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500",
    inStock: true
  },
  {
    id: 34,
    title: "Aromatherapy Scented Candle",
    price: 449,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500",
    inStock: true
  },
  {
    id: 35,
    title: "Gaming Controller Wireless",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500",
    inStock: true
  },
  {
    id: 36,
    title: "Canvas Tote Bag",
    price: 549,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500",
    inStock: true
  },
  {
    id: 37,
    title: "Camera Tripod Stand",
    price: 1899,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    inStock: true
  },
  {
    id: 38,
    title: "Resistance Bands Set",
    price: 649,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500",
    inStock: true
  },
  {
    id: 39,
    title: "Linen Button-Down Shirt",
    price: 1499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    inStock: false
  },
  {
    id: 40,
    title: "Fast Wireless Charger Pad",
    price: 1299,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500",
    inStock: true
  },
  {
    id: 41,
    title: "Basketball High-Tops",
    price: 3799,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500",
    inStock: true
  },
  {
    id: 42,
    title: "Digital Kitchen Scale",
    price: 749,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
    inStock: true
  },
  {
    id: 43,
    title: "Knitted Winter Beanie",
    price: 399,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500",
    inStock: true
  },
  {
    id: 44,
    title: "Action Camera 4K",
    price: 8999,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    inStock: true
  },
  {
    id: 45,
    title: "Extended RGB Mousepad",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    inStock: false
  },
  {
    id: 46,
    title: "Stainless Steel Kettle",
    price: 1699,
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500",
    inStock: true
  },
  {
    id: 47,
    title: "Skipping Jump Rope",
    price: 349,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    inStock: true
  },
  {
    id: 48,
    title: "Blue Light Blocking Glasses",
    price: 949,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=500",
    inStock: true
  },
  {
    id: 49,
    title: "Mini Drone with Camera",
    price: 6499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500",
    inStock: true
  },
  {
    id: 50,
    title: "Minimalist White Sneakers",
    price: 2199,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    inStock: true
  }
];

export default cardData;