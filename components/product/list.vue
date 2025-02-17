
<template>
  <div class="product">
    // Product
    <div v-for="(item, index) in list" :key="index">
      // Product: {{ item }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{list: string[]}>(), {
  list: () => ([])
});

const { list } = toRefs(props);
</script>