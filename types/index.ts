export interface ICartItem {
  id: number;
  name: string;
  price: number;
  active: boolean;
  count: number;
}

// export interface ICategoryItem {
//   id: number;
//   name: string;
//
// }

export interface ICategoryItemProps {
  name: string; // Category name
  image?: string; // Category img link
}