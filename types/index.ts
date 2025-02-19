import type { VBreadcrumbs } from 'vuetify/components/VBreadcrumbs';

// Responses

export interface IProduct {
  id: number;
  title: string;
  price: number; // float
  category?: string;
  description?: string;
  image?: string;
}

export type ICategory = string;

// END Responses

// Requests

export interface IGetProductListPayload {
  limit?: number;
  sort?: string;
}

// END Requests

export interface ICartItem extends IProduct {
  count: number;
}

// Components props

export interface ICategoryItemProps {
  name: string; // Category name
  image?: string; // Category img link
}

export interface IProductItemProps extends IProduct {}

export interface IProductListProps {
  list: IProductItemProps[];
}

export interface IPageHeaderProps {
  title?: string;
  breadcrumbs: IBreadcrumb[];
}

export interface ICartItemProps extends ICartItem {}

export interface ICartListProps {
  list: ICartItemProps[];
}

export interface IProductCounterProps {
  count?: number;
}

// End components props

// Other

export type IBreadcrumb = InstanceType<typeof VBreadcrumbs>['$props']['items'];