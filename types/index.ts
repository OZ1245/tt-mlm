import type { VBreadcrumbs } from 'vuetify/components/VBreadcrumbs';

export interface ICartItem {
  id: number;
  name: string;
  price?: number;
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

export interface IProduct {
  id: number;
  name: string;
  image?: string;
  price: number;
}

export interface IProductListProps {
  list: IProductItemProps[];
}
export interface IProductItemProps extends IProduct {}

export type IBreadcrumb = InstanceType<typeof VBreadcrumbs>['$props']['items'];

export interface IPageHeaderProps {
  title?: string;
  breadcrumbs: IBreadcrumb[];
}

export interface ICartItemProps extends ICartItem {}

export interface IProductCounterProps {
  count?: number;
}