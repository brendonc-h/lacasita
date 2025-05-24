export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderDetails = {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customerInfo: CustomerInfo;
};

export type CustomerInfo = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  orderType: 'pickup' | 'delivery';
  specialInstructions?: string;
};
