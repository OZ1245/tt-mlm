<template>
  <v-card class="product">
    <v-img :src="image" height="300" aspect-ratio="16/9"></v-img>
    
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle></v-card-subtitle>
    
    <v-card-actions class="product__footer">
      <p>{{ price }} {{ currency }}</p>
      <v-btn v-if="!isExist" variant="tonal" color="primary" @click="handleBayProduct">Купить</v-btn>
      <product-counter v-else :count="count" @decrement="handleDecrementCount" @increment="handleIncrementCount"/>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type { IProductItemProps } from '~/types';
import { useCartStore } from '~/store/cart';

const { currency, addCartItem, getCartItemById, incrementCartItemCount, decrementCartItemCount } = useCartStore();

const props = withDefaults(defineProps<IProductItemProps>(), {
  image: 'https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg',
});

const { id, title, image, price } = toRefs(props);

const cartItem = computed(() => getCartItemById(id.value));
const isExist = computed(() => !!cartItem.value);
const count = computed((): number => {
  return cartItem.value?.count || 0
});

const handleBayProduct = (): void => {
  addCartItem({
    ...props,
    count: 1
  })
}

const handleIncrementCount = (): void => {
  incrementCartItemCount(id.value);
}
const handleDecrementCount = (): void => {
  decrementCartItemCount(id.value);
}
</script>

<style lang="scss">
.product__footer {
  display: flex;
  justify-content: space-between;
}
</style>