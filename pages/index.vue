
<template>
  <v-container>
    <v-row>
<!--      <v-col cols="12">-->
<!--        <h2>Популярные категории</h2>-->
<!--      </v-col>-->
<!--      <v-col cols="12">-->
<!--        <CategoryList :list="categories"/>-->
<!--      </v-col>-->
      <v-expansion-panels v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-title>
            <h2>Популярные категории</h2>
          </v-expansion-panel-title>
          
          <v-expansion-panel-text>
            <CategoryList :list="categories"/>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    
    <v-row>
      <v-col cols="12">
        <h2>Популярные товары</h2>
      </v-col>
      <v-col cols="12">
        <ProductList :list="propducts"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const panel = ref([0]);

const categories = ref<string[]>([
  'category 1',
  'category 2',
  'category 3',
  'category 4',
]);

const propducts = ref<string[]>([
  'product 1',
  'product 2',
  'product 3',
  'product 4',
])
</script>