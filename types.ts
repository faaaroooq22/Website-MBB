export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  isPopular?: boolean;
  customDetails?: string; // For Make Your Burger detailed breakdown
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CategoryGroup {
  name: string;
  items: MenuItem[];
}