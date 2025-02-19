<template>
  <v-container>
    <v-row>
      <v-expansion-panels v-model="panel" flat>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h3 class="text-h4">Все категории</h3>
          </v-expansion-panel-title>
          
          <v-expansion-panel-text>
            <template v-if="isLoadingCategories">
              <v-row>
                <v-col cols="3" v-for="i in 4" :key="i">
                  <v-skeleton-loader
                    class="mx-auto border"
                    type="card"
                  ></v-skeleton-loader>
                </v-col>
              </v-row>
            </template>
            
            <template v-else>
              <category-list v-if="isExistsCategories" :list="categories"/>
              
              <v-alert v-else>
                Категорий пока нет
              </v-alert>
            </template>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    
    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <h3 class="text-h4">Все товары</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <product-list :list="products" :loading="isLoadingProducts"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { ICategory, IProduct } from '~/types';
import { getCategoryList, getProductList } from '~/api';

definePageMeta({
  title: 'Главная'
});

const snackbar = useSnackbar();

const isLoadingPage = ref(false);
const isLoadingCategories = ref(false);
const isLoadingProducts = ref(false);
const panel = ref([0]);
const categories = ref<ICategory[]>([]);
const products = ref<IProduct[]>([]);

const isExistsCategories = computed((): boolean => !!categories.value.length);

const fetchCategoryList = async () => {
  isLoadingCategories.value = true;
  
  try {
    categories.value = await getCategoryList();
  } catch (error) {
    snackbar.add({
      type: 'error',
      text: `Ошибка получения списка категорий: ${error}`
    });
  } finally {
    isLoadingCategories.value = false;
  }
}

const fetchProductList = async () => {
  isLoadingProducts.value = true;
  
  try {
    products.value = await getProductList({ limit: 30 });
  } catch (error) {
    snackbar.add({
      type: 'error',
      text: `Ошибка получения списка товаров: ${error}`
    });
  } finally {
    isLoadingProducts.value = false;
  }
}

const initPage = () => {
  fetchCategoryList();
  fetchProductList();
}

initPage();
</script>