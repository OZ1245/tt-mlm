
<template>
  <v-card :title="name" :image="image" height="150" color="primary"></v-card>
</template>

<script lang="ts" setup>
import type { ICategoryItemProps } from '~/types';

const props = withDefaults(defineProps<ICategoryItemProps>(), {
  name: '',
  image: 'https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg'
});

const { name } = toRefs(props);
</script>