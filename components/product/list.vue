
<template>
  <v-container class="product">
    <v-row>
      <v-col v-if="title" cols="auto">
        <h2 class="text-h4">{{ title }}</h2>
      </v-col>
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
    
    <product-skeleton v-if="loading" :mode="toggleLayout" />
    
    <template v-else>
      <v-alert v-if="!isExistsProducts" :type="'error'">
        В данной категории пока нет товаров
      </v-alert>
      
      <template v-else>
        <v-row v-if="isGridView">
          <v-col cols="3" v-for="(item, index) in list" :key="`product-${index}`">
            <product-item-grid v-bind="item" />
          </v-col>
        </v-row>
        
        <v-row v-if="isListView">
          <v-col>
            <v-row v-for="(item, index) in list" :key="`product-${index}`">
              <v-col>
                <product-item-list v-bind="item" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        
        <v-row v-if="isTableView">
          <v-col>
            <product-item-table :list="list" />
          </v-col>
        </v-row>
      </template>
    </template>
  </v-container>
</template>

<script lang="ts" setup>
import type { IProductListProps } from '~/types';
import { useProductStore } from '~/store/product';

const productStore = useProductStore();
const { getProductListLayout } = toRefs(productStore);
const { setProductListLayout } = productStore;

const props = withDefaults(defineProps<IProductListProps>(), {
  list: () => ([]),
  loading: false,
  title: '',
});
const { list, loading, title } = toRefs(props);

const toggleLayout = computed({
  get() {
    return getProductListLayout.value;
  },
  set(value) {
    setProductListLayout(value);
  }
});
const isExistsProducts = computed((): boolean => !loading.value && !!list.value.length);
const isGridView = computed((): boolean => toggleLayout.value === 0);
const isListView = computed((): boolean => toggleLayout.value === 1);
const isTableView = computed((): boolean => toggleLayout.value === 2);
</script>