
<template>
  <v-container>
    <v-row>
      <v-col>
        <product-list :list="products" :loading="isLoadingProducts"></product-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types';
import { getProductListByCategory } from '~/api';

const route = useRoute();
const snackbar = useSnackbar();

const isLoadingProducts = ref<boolean>(false);
const products = ref<IProduct[]>([]);

const fetchProducts = async () => {
  isLoadingProducts.value = true;
  
  try {
    products.value = await getProductListByCategory({
      category: route.params.category as string || '',
      limit: 16
    });
  } catch (error) {
    snackbar.add({
      type: 'error',
      text: `Ошибка получения списка товаров: ${error}`,
    });
  } finally {
    isLoadingProducts.value = false;
  }
}

const initPage = () => {
  fetchProducts();
}
console.log('route.params.category:', route.params.category);
definePageMeta({
  title: `Категория`
  // title: ''
});

initPage();
</script>