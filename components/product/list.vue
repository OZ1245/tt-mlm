
<template>
  <v-container class="product">
    <v-row>
      <v-col align="end" i>
        <v-btn-toggle v-model="toggleLayout" density="compact" border divided>
          <v-btn>
            <v-icon icon="mdi-view-grid"></v-icon>
          </v-btn>
          
          <v-btn>
            <v-icon icon="mdi-view-list"></v-icon>
          </v-btn>
          
          <v-btn>
            <v-icon icon="mdi-table"></v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    
    <product-skeleton v-if="loading" />
    
    <template v-else>
      <v-alert v-if="!isExistsProducts" :type="'error'">
        В данной категории пока нет товаров
      </v-alert>
      
      <v-row v-else>
        <v-col cols="3" v-for="(item, index) in list" :key="`product-${index}`">
          <product-item v-bind="item" />
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts" setup>
import type { IProductListProps } from '~/types';

const props = withDefaults(defineProps<IProductListProps>(), {
  list: () => ([]),
  loading: false
});
const { list, loading } = toRefs(props);

const toggleLayout = ref<number>(0);

const isExistsProducts = computed((): boolean => !loading.value && !!list.value.length);
</script>