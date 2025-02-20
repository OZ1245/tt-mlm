export const useProductStore = defineStore('productStore', () => {
  const cookie = useCookie('productListLayout', {
    default: () => 0,
    watch: true,
  });

  const layoutId = ref<number>(0);

  const getProductListLayout = computed((): number => {
    if (cookie.value) {
      return cookie.value;
    }

    return layoutId.value;
  });

  const setProductListLayout = (value: number) => {
    layoutId.value = value;
    cookie.value = value;
  }

  return {
    setProductListLayout,
    getProductListLayout,
  }
})