<template>
  <v-card class="product">
    <nuxt-link :to="productRoute">
      <v-img :src="image" height="300" aspect-ratio="16/9"></v-img>
    </nuxt-link>
    
    <nuxt-link :to="productRoute" class="text-decoration-none">
      <v-card-title>{{ title }}</v-card-title>
    </nuxt-link>
    
    <v-card-actions class="product__footer">
      <v-card-item>{{ price }} {{ currency }}</v-card-item>
      <v-btn v-if="!isExist" variant="tonal" color="primary" @click="handleBuyProduct">Купить</v-btn>
      <product-counter v-else :count="count" @decrement="handleDecrementCount" @increment="handleIncrementCount"/>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type { IProductItemProps } from '~/types';
import { useCartStore } from '~/store/cart';
import { useProduct } from '~/composables/useProduct';

const props = defineProps<IProductItemProps>();

const { currency } = useCartStore();
const {
  title,
  image,
  price,
  isExist,
  count,
  productRoute,
  handleDecrementCount,
  handleIncrementCount,
  handleBuyProduct
} = useProduct(props);
</script>

<style lang="scss">
.product__footer {
  display: flex;
  justify-content: space-between;
}
</style>