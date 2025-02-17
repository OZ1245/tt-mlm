
<template>
  <div>
    // Categories list
    <div v-for="(item, index) in list" :key="index">
      <CategoryItem :name="item"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{list: string[]}>(), {
  list: () => ([]),
});

const { list } = toRefs(props);
</script>