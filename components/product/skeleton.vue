<template>
  <v-row v-if="isGridView">
    <v-col cols="3" v-for="i in 8" :key="i">
      <v-skeleton-loader
        class="mx-auto border"
        type="card, button"
      />
    </v-col>
  </v-row>
  
  <v-row v-if="isListView">
    <v-col cols="12" v-for="i in 8" :key="i">
      <v-skeleton-loader class="mx-auto border" type="list-item-avatar"/>
    </v-col>
  </v-row>
  
  <v-row v-if="isTableView">
    <v-col cols="12" v-for="i in 8" :key="i">
      <v-skeleton-loader class="mx-auto border" type="table-thead, table-tbody"/>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import type { IProductSkeletonProps } from '~/types';

const props = withDefaults(defineProps<IProductSkeletonProps>(), {
  mode: 0
});
const { mode } = toRefs(props);

const isGridView = computed((): boolean => mode.value === 0);
const isListView = computed((): boolean => mode.value === 1);
const isTableView = computed((): boolean => mode.value === 2);
</script>