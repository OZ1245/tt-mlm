<template>
  <v-data-table
    :headers="listHeaders"
    :items="list"
    disable-sort
    :items-per-page="-1"
    hide-default-footer
  >
    <template v-slot:item.image="{ item }">
      <nuxt-link :to="getProductRoute(item.id)">
        <v-img :src="item.image" width="50" height="50" contain />
      </nuxt-link>
    </template>
    <template v-slot:item.title="{ item }">
      <nuxt-link :to="getProductRoute(item.id)">{{ item.title }}</nuxt-link>
    </template>
    <template v-slot:item.price="{ item }">{{ item.price }} {{ currency }}</template>
    <template v-slot:item.actions="{ item }">
      <v-btn
        v-if="!getExistsCartItem(item.id)"
        variant="tonal"
        color="primary"
        @click="handleBuyProduct(item)"
      >
        Купить
      </v-btn>
      <product-counter
        v-else
        :count="getCartItemCountById(item.id)"
        @decrement="handleDecrementProductCount(item.id)"
        @increment="handleIncrementProductCount(item.id)"
      />
    </template>
  </v-data-table>
</template>

<script lang="ts" setup>
import type { IProductTableItem, IProductTableProps } from '~/types';
import { useCartStore } from '~/store/cart';

const { currency, getCartItemById, getCartItemCountById, incrementCartItemCount, decrementCartItemCount, addCartItem } = useCartStore();

const props = defineProps<IProductTableProps>();
const { list } = toRefs(props);

const listHeaders = [
  {
    key: 'image',
    title: 'Изображение',
  },
  {
    key: 'title',
    title: 'Название',
  },
  {
    key: 'price',
    title: 'Цена',
  },
  {
    key: 'actions',
    title: '',
    align: 'end',
  },
];

const getProductRoute = (id: number): string => `/product/${id}`;
const getExistsCartItem = (id: number): boolean => {
  console.log('=== getExistsCartItem ===');
  const r = getCartItemCountById(id);
  console.log('r', r);
  return !!r;
}

const handleBuyProduct = (item: IProductTableItem) => {
  addCartItem({
    ...item,
    count: 1
  });
}

const handleDecrementProductCount = (id: number) => {
  decrementCartItemCount(id);
}
const handleIncrementProductCount = (id: number) => {
  console.log('=== handleIncrementProductCount ===');
  console.log('id:', id);
  incrementCartItemCount(id);
}
</script>