import type { ICategory, IGetProductListByCategoryPayload, IGetProductListPayload, IProduct } from '~/types';

const url = 'https://fakestoreapi.com';

export const getProductList = async ({ limit = 16, sort = 'asc' }: IGetProductListPayload): Promise<IProduct[]> => {
  try {
    const { data } = await useFetch<IProduct[] | null>(`${url}/products`, {
      params: {
        limit,
        sort,
      }
    });
    return data.value || [];
  } catch (error) {
    throw error;
  }
}

export const getProduct = async (id: number): Promise<IProduct | null> => {
  try {
    const { data } = await useFetch<IProduct | null>(`${url}/products/${id}`);
    return data.value;
  } catch (error) {
    throw error;
  }
}

export const getCategoryList = async (): Promise<ICategory[]> => {
  try {
    const { data } = await useFetch<ICategory[] | null>(`${url}/products/categories`);
    return data.value || [];
  } catch (error) {
    throw error;
  }
}

export const getProductListByCategory = async ({ category, limit = 16, sort = 'asc' }: IGetProductListByCategoryPayload): Promise<IProduct[]> => {
  try {
    const { data } = await useFetch<IProduct[] | null>(`${url}/products/category/${category}`, {
      params: {
        limit,
        sort,
      }
    });
    return data.value || [];
  } catch (error) {
    throw error;
  }
}