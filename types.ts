export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
}

export interface User {
  email: string;
}

export enum View {
  HOME,
  PRODUCT_DETAIL,
  CART,
  ORDERS,
  SIGN_IN,
  CONTACT,
  JOIN_ARTIST,
  PAYMENT
}

/*
--- BACKEND DATABASE STRUCTURE (Example for MongoDB/Firebase) ---

// Users Collection
{
  "_id": "userId123",
  "email": "user@example.com",
  "passwordHash": "hashed_password_string",
  "createdAt": "2023-10-27T10:00:00Z"
}

// Products Collection
{
  "_id": "productId456",
  "name": "Handmade Lotus Wall Shelf",
  "description": "A beautifully handcrafted wall shelf in the shape of a lotus, made with traditional Lippan art techniques.",
  "price": 129.99,
  "imageUrl": "https://picsum.photos/seed/lippan2/800/800",
  "category": "Wall Decor",
  "stock": 15
}

// Orders Collection
{
  "_id": "orderId789",
  "userId": "userId123",
  "products": [
    {
      "productId": "productId456",
      "quantity": 1,
      "price": 129.99
    }
  ],
  "totalAmount": 129.99,
  "status": "Processing", // e.g., 'Processing', 'Shipped', 'Delivered', 'Cancelled'
  "shippingAddress": {
    "street": "123 Art Lane",
    "city": "Jaipur",
    "state": "Rajasthan",
    "zip": "302001"
  },
  "createdAt": "2023-10-28T12:00:00Z"
}

// Payments Collection
{
  "_id": "paymentIdABC",
  "orderId": "orderId789",
  "provider": "Stripe", // e.g., 'Stripe', 'Razorpay', 'UPI'
  "transactionId": "txn_12345",
  "amount": 129.99,
  "status": "succeeded", // e.g., 'succeeded', 'pending', 'failed'
  "createdAt": "2023-10-28T12:01:00Z"
}

*/
