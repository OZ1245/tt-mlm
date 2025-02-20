import { defineStore } from 'pinia';
import type { ICartItem } from '~/types';

export const useCartStore = defineStore('cartStore', () => {
  const cookie = useCookie('cartList', {
    default: () => [],
    watch: true,
    encode: value => JSON.stringify(value),
    decode: value => JSON.parse(value)
  });

  const items = ref<ICartItem[]>([]);
  const currency = ref('₽');

  const cartList = computed((): ICartItem[] => {
    if (items.value.length) return items.value;
    return cookie.value || [];
  });

  const cartItemsCount = computed((): number => cartList.value.length);

  const totalCost = computed((): number => items.value.reduce((acc, item) => {
    return acc + (item.price || 0) * item.count;
  }, 0));

  const totalCount = computed((): number => items.value.reduce((acc, item) => {
    return acc + item.count;
  }, 0));

  const findCartItemIndex = (id: number) => items.value.findIndex((item) => item.id === id);

  const getCartItemById = (id: number): ICartItem | null => items.value.find((item) => item.id === id) || null;

  const getCartItemCountById = (id: number): number => items.value.find((item) => item.id === id)?.count || 0;
  
  const addCartItem = (data: ICartItem): void => {
    console.log('=== addCartItem ===');
    console.log('data:', data);
    cookie.value = null;
    
    const foundCartItemIndex = findCartItemIndex(data.id);

    console.log('foundCartItemIndex:', foundCartItemIndex);

    if (foundCartItemIndex >= 0) {
      items.value[foundCartItemIndex].count += 1;
      return;
    }

    items.value.push(data);
    cookie.value = items.value;
  }

  const removeCartItem = (id: number): void => {
    cookie.value = null;

    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0) {
      items.value.splice(foundCartItemIndex, 1);
    }

    cookie.value = JSON.stringify(items.value);
  }

  const clearCartItem = () => {
    items.value = [];
    cookie.value = null;
  }

  const changeCountCartItem = (id: number, newCountValue: number): void => {
    cookie.value = null;

    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0) {
      items.value[foundCartItemIndex].count = newCountValue;
    }
    cookie.value = JSON.stringify(items.value);
  }

  const incrementCartItemCount = (id: number): void => {
    cookie.value = null;

    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0) {
      items.value[foundCartItemIndex].count += 1;
    }

    cookie.value = JSON.stringify(items.value);
  }

  const decrementCartItemCount = (id: number): void => {
    cookie.value = null;

    const foundCartItemIndex = findCartItemIndex(id);

    if (foundCartItemIndex >= 0 && items.value[foundCartItemIndex].count !== 0) {
      items.value[foundCartItemIndex].count -= 1;
    }

    cookie.value = JSON.stringify(items.value);
  }

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
    getCartItemCountById,
    incrementCartItemCount,
    decrementCartItemCount,
    changeCountCartItem
  }
})
