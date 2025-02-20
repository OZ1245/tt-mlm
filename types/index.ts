// Responses

export interface IProduct {
  id: number;
  title: string;
  price: number; // float
  category?: string;
  description?: string;
  image: string;
}

export type ICategory = string;

// END Responses

// Requests

interface ICommonPayload {
  limit?: number;
  sort?: string;
}

export interface IGetProductListPayload extends ICommonPayload {}

// END Requests

export interface ICartItem extends IProduct {
  count: number;
}

export interface IGetProductListByCategoryPayload extends ICommonPayload {
  category: string;
}

// Components props

export interface ICategoryItemProps {
  name: string; // Category name
  image?: string; // Category img link
}

export interface IProductItemProps extends IProduct {}

export interface IProductListProps {
  list: IProductItemProps[];
  loading: boolean;
  title?: string;
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

export interface IProductTableItem extends IProduct, ICartItemProps {}

export interface IProductTableProps {
  list: IProductTableItem[];
}

export interface IProductSkeletonProps {
  mode: number;
}

// End components props

// Other

export interface IBreadcrumb {
  title: string;
  to?: string;
  disabled?: boolean;
}