
<template>
  <div>
    <section>
      // Home
      <CategoryList :list="categories"/>
      
      <ProductList :list="propducts"/>
    </section>
  </div>
</template>

<script lang="ts" setup>
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