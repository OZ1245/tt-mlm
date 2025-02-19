import { useCartStore } from '~/store/cart';
import type { ICartItem, IProduct, IProductItemProps } from '~/types';

interface IUseProduct {
  id: Ref<number>;
  title: Ref<string>;
  image: Ref<string>;
  price: Ref<number>;
  cartItem: ComputedRef<ICartItem | null>;
  isExist: ComputedRef<boolean>;
  count: ComputedRef<number>;
  handleIncrementCount: () => void;
  handleDecrementCount: () => void;
  handleBuyProduct: () => void;
}

export function useProduct (props = {} as IProductItemProps): IUseProduct {
  const { currency, addCartItem, getCartItemById, incrementCartItemCount, decrementCartItemCount } = useCartStore();

  const { id, title, image, price } = toRefs(props);

  const cartItem = computed((): ICartItem | null => getCartItemById(id.value));
  const isExist = computed((): boolean => !!cartItem.value);
  const count = computed((): number => {
    return cartItem.value?.count || 0
  });

  const handleIncrementCount = (): void => {
    incrementCartItemCount(id.value);
  }
  const handleDecrementCount = (): void => {
    decrementCartItemCount(id.value);
  }

  const handleBuyProduct = (): void => {
    addCartItem({
      ...props,
      count: 1
    })
  }

  return {
    id,
    title,
    image,
    price,
    cartItem,
    isExist,
    count,
    handleIncrementCount,
    handleDecrementCount,
    handleBuyProduct
  }
}