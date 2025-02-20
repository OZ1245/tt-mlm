
<template>
  <v-container>
    <v-row>
      <v-col>
        <product-list :list="products" :loading="isLoadingProducts" :title="productListTitle"></product-list>
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
const categoryName = ref<string>('');
const productListTitle = route.params.category as string || 'Товары категории';

const fetchProducts = async () => {
  isLoadingProducts.value = true;
  
  try {
    products.value = await getProductListByCategory({
      category: route.params.category as string || '',
      limit: 16
    });
    categoryName.value = route.params.category as string || 'Категория';
  } catch (error) {
    snackbar.add({
      type: 'error',
      text: `Ошибка получения списка товаров: ${error}`,
    });
  } finally {
    isLoadingProducts.value = false;
  }
}

const initPage = async () => {
  await fetchProducts();
  
  useHead({
    title: categoryName.value,
  });
  console.log('categoryName.value: ', categoryName.value);
  definePageMeta({
    breadcrumb: categoryName.value // FIXME: пустая строка вместо значения
  });
}

initPage();
</script>