import type { ICategory, IGetProductListPayload, IProduct } from '~/types';

const url = 'https://fakestoreapi.com';

export const getProductList = async ({ limit = 15, sort = 'asc' }: IGetProductListPayload): Promise<IProduct[]> => {
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

export const getProductListByCategory = async (category: string): Promise<ICategory | null> => {
  try {
    const { data } = await useFetch<ICategory | null>(`${url}/products/category/${category}`);
    return data.value;
  } catch (error) {
    throw error;
  }
}