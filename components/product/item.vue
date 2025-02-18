<template>
  <v-card class="product">
    <v-card-text class="pa-0">
      <v-img :src="image"></v-img>
    </v-card-text>
    
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle></v-card-subtitle>
    
    <v-card-actions class="product__footer">
      <p>{{ price }} {{ currency }}</p>
      <v-btn v-if="!isExist" variant="tonal" color="primary" @click="handleBayProduct">Купить</v-btn>
      <v-btn-group
        v-else
        color="primary"
        variant="outlined"
        density="compact"
      >
        <v-btn variant="tonal" color="primary" :disabled="isDisabledDecrementButton" @click="handleDecrementCount">
          <v-icon icon="mdi-minus"/>
        </v-btn>
        <v-btn class="product__button">{{ count }}</v-btn>
        <v-btn variant="tonal" color="primary" @click="handleIncrementCount">
          <v-icon icon="mdi-plus"/>
        </v-btn>
      </v-btn-group>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type { IProductItemProps } from '~/types';
import { useIndexStore } from '~/store';

const { currency, putCart, getCartItemById, incrementCartItemCount, decrementCartItemCount } = useIndexStore();

const props = withDefaults(defineProps<IProductItemProps>(), {
  image: 'https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg',
});

const { id, name, image, price } = toRefs(props);

const cartItem = computed(() => getCartItemById(id.value));
const isExist = computed(() => !!cartItem.value);
const count = computed((): number => {
  return cartItem.value?.count || 0
});
const isDisabledDecrementButton = computed(() => !cartItem.value?.count);

const handleBayProduct = (): void => {
  putCart({
    id: id.value,
    name: name.value,
    price: price.value,
    count: 1
  })
}

const handleIncrementCount = (): void => {
  incrementCartItemCount(id.value);
}
const handleDecrementCount = (): void => {
  decrementCartItemCount(id.value);
}
</script>

<style lang="scss">
.product__footer {
  display: flex;
  justify-content: space-between;
}
</style>