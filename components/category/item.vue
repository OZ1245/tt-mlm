
<template>
  <div>
    // Category name: {{ name }}
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{name: string}>(), {
  name: '',
});

const { name } = toRefs(props);
</script>