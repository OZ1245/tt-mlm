<template>
  <v-card class="product product--list">
    <v-row align="center" justify="center" no-gutters>
      <v-col cols="auto">
        <v-img :src="image" width="80" height="80" cover class="ma-4"></v-img>
      </v-col>
    
      <v-col>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ price }} {{ currency }}</v-card-text>
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