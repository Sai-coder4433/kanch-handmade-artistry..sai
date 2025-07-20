import { Product, Order } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Handmade Lotus Wall Shelf",
    price: 129.99,
    imageUrl: "https://picsum.photos/seed/lippan2/800/800",
    category: "Lippan Art",
    description: "A beautifully handcrafted wall shelf in the shape of a lotus, made with traditional Lippan art techniques. Perfect for adding a touch of rustic elegance to your living space. The intricate mirror work reflects light beautifully."
  },
  {
    id: 2,
    name: "Vibrant Lippan Art Tiles",
    price: 89.99,
    imageUrl: "https://picsum.photos/seed/lippan/800/800",
    category: "Lippan Art",
    description: "A collection of four square framed Lippan Art tiles in vibrant, earthy colors. Each tile features a unique geometric pattern, handcrafted by skilled artisans. Arrange them together or separately to create a stunning wall display."
  },
  {
    id: 3,
    name: "Customized Nameplate",
    price: 75.50,
    imageUrl: "https://picsum.photos/seed/gifting1/800/800",
    category: "Gifting",
    description: "A personalized wooden nameplate, adorned with delicate handmade clay art. An ideal customized gift for housewarmings, weddings, or anniversaries. Provide the names and we will craft it with love."
  },
  {
    id: 4,
    name: "Bohemian Macrame Wall Hanging",
    price: 59.99,
    imageUrl: "https://picsum.photos/seed/walldecor1/800/800",
    category: "Wall Decor",
    description: "A large, handcrafted macrame wall hanging that brings a bohemian and cozy vibe to any room. Made with 100% natural cotton cord, it's a statement piece for your bedroom or living room."
  },
  {
    id: 5,
    name: "Hand-Painted Gifting Box",
    price: 45.00,
    imageUrl: "https://picsum.photos/seed/gifting2/800/800",
    category: "Gifting",
    description: "A set of three hand-painted wooden boxes, perfect for gifting jewelry, chocolates, or other small treasures. The intricate floral patterns make the box a keepsake in itself."
  },
  {
    id: 6,
    name: "Abstract Art Wall Decor",
    price: 150.00,
    imageUrl: "https://picsum.photos/seed/walldecor2/800/800",
    category: "Wall Decor",
    description: "A modern, abstract piece of wall art featuring textured paint and metallic accents. This unique handmade item is perfect for contemporary homes and adds a sophisticated artistic touch."
  },
];

export const MOCK_ORDERS: Order[] = [
    {
        id: 'KANCH-92618',
        date: '2023-10-15',
        status: 'Delivered',
        total: 129.99,
        items: [
            {...PRODUCTS[0], quantity: 1}
        ]
    },
    {
        id: 'KANCH-85241',
        date: '2023-09-28',
        status: 'Delivered',
        total: 135.49,
        items: [
            {...PRODUCTS[2], quantity: 1},
            {...PRODUCTS[4], quantity: 1}
        ]
    }
];

export const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const CartIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.838-5.514A1.875 1.875 0 0018.338 6H5.214a1.875 1.875 0 00-1.838 2.335l1.838 5.514z" />
  </svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
