import React from 'react';
import { MOCK_ORDERS } from '../constants';
import { Order } from '../types';
import { useAppContext } from '../context/AppContext';

const OrderCard = ({ order }: { order: Order }) => (
  <div className="bg-white p-6 rounded-lg shadow-md font-poppins">
    <div className="flex justify-between items-start border-b pb-4 mb-4">
      <div>
        <p className="font-bold text-lg text-stone-800">Order #{order.id}</p>
        <p className="text-sm text-gray-500">Date: {order.date}</p>
      </div>
      <span className={`px-3 py-1 text-sm rounded-full font-semibold ${
        order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {order.status}
      </span>
    </div>
    <div className="space-y-3 mb-4">
      {order.items.map(item => (
        <div key={item.id} className="flex items-center gap-4">
          <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
          <div>
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-right border-t pt-4">
      <p className="text-lg font-bold text-stone-800">Total: ${order.total.toFixed(2)}</p>
    </div>
  </div>
);

const OrdersPage = () => {
  const { user } = useAppContext();

  if (!user) {
    return <div className="text-center py-20 font-poppins">Please sign in to view your orders.</div>;
  }
  
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-playfair font-bold text-stone-800 mb-8">My Orders</h1>
      <div className="space-y-6">
        {MOCK_ORDERS.length > 0 ? (
          MOCK_ORDERS.map(order => <OrderCard key={order.id} order={order} />)
        ) : (
          <p className="text-center text-gray-600 py-10">You have no past orders.</p>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
