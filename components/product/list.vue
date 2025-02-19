
<template>
  <v-container class="product">
    <v-row>
      <v-col cols="3" v-for="(item, index) in list" :key="`product-${index}`">
        <product-item v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { IProductListProps } from '~/types';

const props = withDefaults(defineProps<IProductListProps>(), {
  list: () => ([])
});

const { list } = toRefs(props);
</script>