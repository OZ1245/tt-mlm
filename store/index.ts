import { defineStore } from 'pinia';
import type { ICartItem } from '~/types';

export const useIndexStore = defineStore('websiteStore', () => {
  const cartList = ref<ICartItem[]>([]);
  const currency = ref('₽');

  const getCartItemsCount = computed((): number => cartList.value.length);

  const putCart = (data: ICartItem): void => {
    const findedCartItemIndex = cartList.value.findIndex((item) => item.id === data.id);

    if (findedCartItemIndex >= 0) {
      cartList.value[findedCartItemIndex].count += 1;
      return;
    }

    cartList.value.push(data);
  }

  const incrementCartItemCount = (id: number): void => {
    const findedCartItemIndex = cartList.value.findIndex((item) => item.id === id);
    if (findedCartItemIndex >= 0) {
      cartList.value[findedCartItemIndex].count += 1;
    }
  }
  const decrementCartItemCount = (id: number): void => {
    const findedCartItemIndex = cartList.value.findIndex((item) => item.id === id);
    if (findedCartItemIndex >= 0 && cartList.value[findedCartItemIndex].count !== 0) {
      cartList.value[findedCartItemIndex].count -= 1;
    }
  }

  const getCartItemById = (id: number): ICartItem | null => cartList.value.find((item) => item.id === id) || null;

  return {
    cartList,
    currency,
    getCartItemsCount,
    putCart,
    getCartItemById,
    incrementCartItemCount,
    decrementCartItemCount
  }
})
