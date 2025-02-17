import { defineStore } from 'pinia';
import type { ICartItem } from '~/types';

export const useIndexStore = defineStore('websiteStore', () => {
  const cartList = ref<ICartItem[]>([]);

  const getCartItemsCount = computed((): number => cartList.value.length);

  const putCart = (data: ICartItem) => {
    const findedCartItemIndex = cartList.value.findIndex((item) => item.id === data.id);

    if (findedCartItemIndex >= 0) {
      cartList.value[findedCartItemIndex].count += 1;
      return;
    }

    cartList.value.push(data);
  }

  return {
    cartList,
    getCartItemsCount,
    putCart,
  }
})
