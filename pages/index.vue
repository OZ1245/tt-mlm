
<template>
  <v-container>
    <v-row>
      <v-expansion-panels v-model="panel" flat>
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h3 class="text-h4">Популярные категории</h3>
          </v-expansion-panel-title>
          
          <v-expansion-panel-text>
            <category-list :list="categories"/>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <h3 class="text-h4">Популярные товары</h3>
      </v-col>
      <v-col cols="12">
        <product-list :list="propducts"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { IProductItemProps } from '~/types';

definePageMeta({
  title: 'Главная'
});

const panel = ref([0]);

const categories = ref<string[]>([
  'category 1',
  'category 2',
  'category 3',
  'category 4',
]);

const propducts = ref<IProductItemProps[]>([
  {
    id: 1,
    name: 'Product 1',
    price: 1000
  },
  {
    id: 2,
    name: 'Product 2',
    price: 2000
  },
  {
    id: 3,
    name: 'Product 3',
    price: 3000
  },
  {
    id: 4,
    name: 'Product 4',
    price: 4000
  },
  {
    id: 5,
    name: 'Product 5',
    price: 5000
  },
]);
</script>