
<template>
  <v-card class="card-category">
    <v-img :src="image" height="150" cover></v-img>
    <v-card-title class="card-category__title">{{ name }}</v-card-title>
  </v-card>
</template>

<script lang="ts" setup>
import type { ICategoryItemProps } from '~/types';

const props = withDefaults(defineProps<ICategoryItemProps>(), {
  name: '',
  image: 'https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg'
});

const { name } = toRefs(props);
</script>

<style lang="scss">
.card-category {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: center;
}
.card-category__title,
.card-category__text {
  width: 100%;
}
.card-category__title {
  text-align: center;
}
</style>