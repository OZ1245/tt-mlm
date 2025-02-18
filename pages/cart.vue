<template>
  <v-container>
    <template v-if="isExist">
      <v-row justify="end">
        <v-col cols="6" align="end">
          <v-btn variant="tonal" color="error" @click="handleClearCart">
            <v-icon icon="mdi-trash-can"/>
            Очистить корзину
          </v-btn>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col>
          <cart-list />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="6">
          <p class="text-h5">
            Итого: {{ totalCount }} товаров на {{ totalCost }} {{ currency }}
          </p>
        </v-col>
        <v-col cols="6" align="end">
          <v-btn variant="tonal" color="primary">Оформить заказ</v-btn>
        </v-col>
      </v-row>
    </template>
    
    <template v-else>
      <v-row>
        <v-col>
          <v-alert color="warning">
            <p class="text-center">
              В корзину еще ничего не добавлено.
              <br>
              <nuxt-link to="/">На главную</nuxt-link>
            </p>
          </v-alert>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script lang="ts" setup>
import { useIndexStore } from '~/store';

const store = useIndexStore();
const { cartItemsCount, totalCount, totalCost } = toRefs(store);
const { currency, clearCartItem } = store;

definePageMeta({
  title: 'Корзина'
});

const isExist = computed(() => !!cartItemsCount.value);

const clearCart = (): void => {
  clearCartItem();
}

const handleClearCart = (): void => {
  clearCart();
}
</script>