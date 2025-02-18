import { defineStore } from 'pinia';
import type { ICartItem } from '~/types';
import { data } from 'autoprefixer';

export const useIndexStore = defineStore('websiteStore', () => {
  const cartList = ref<ICartItem[]>([]);
  const currency = ref('₽');

  const cartItemsCount = computed((): number => cartList.value.length);

  const totalCost = computed(() => cartList.value.reduce((acc, item) => {
    return acc + (item.price || 0) * item.count;
  }, 0));

  const totalCount = computed(() => cartList.value.reduce((acc, item) => {
    return acc + item.count;
  }, 0));

  const findCartItemIndex = (id: number) => cartList.value.findIndex((item) => item.id === id);

  const addCartItem = (data: ICartItem): void => {
    const foundCartItemIndex = findCartItemIndex(data.id)

    if (foundCartItemIndex >= 0) {
      cartList.value[foundCartItemIndex].count += 1;
      return;
    }

    cartList.value.push(data);
  }

  const removeCartItem = (id: number): void => {
    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0) {
      cartList.value.splice(foundCartItemIndex, 1);
    }
  }

  const clearCartItem = () => {
    cartList.value = [];
  }

  const changeCountCartItem = (id: number, newCountValue: number): void => {
    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0) {
      cartList.value[foundCartItemIndex].count = newCountValue;
    }
  }

  const incrementCartItemCount = (id: number): void => {
    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0) {
      cartList.value[foundCartItemIndex].count += 1;
    }
  }

  const decrementCartItemCount = (id: number): void => {
    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0 && cartList.value[foundCartItemIndex].count !== 0) {
      cartList.value[foundCartItemIndex].count -= 1;
    }
  }

  const getCartItemById = (id: number): ICartItem | null => cartList.value.find((item) => item.id === id) || null;

  return {
    cartList,
    totalCost,
    totalCount,
    currency,
    cartItemsCount,
    addCartItem,
    clearCartItem,
    removeCartItem,
    getCartItemById,
    incrementCartItemCount,
    decrementCartItemCount,
    changeCountCartItem
  }
})
