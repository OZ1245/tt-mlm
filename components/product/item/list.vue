<template>
  <v-card class="product product--list">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto">
        <nuxt-link :to="productRoute">
          <v-img :src="image" width="80" height="80" contain class="ma-4"></v-img>
        </nuxt-link>
      </v-col>
    
      <v-col>
        <nuxt-link :to="productRoute" class="text-decoration-none">
          <v-card-title>{{ title }}</v-card-title>
        </nuxt-link>
        <v-card-item>{{ price }} {{ currency }}</v-card-item>
      </v-col>
    
      <v-col cols="auto">
        <v-card-actions class="product__footer">
          <v-btn v-if="!isExist" variant="tonal" color="primary" @click="handleBuyProduct">Купить</v-btn>
          <product-counter v-else :count="count" @decrement="handleDecrementCount" @increment="handleIncrementCount"/>
        </v-card-actions>
      </v-col>
    </v-row>
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