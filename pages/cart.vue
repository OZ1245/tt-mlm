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
          <cart-list
            :list="cartItems"
            @increment="handleIncrementItem"
            @decrement="handleDecrementItem"
            @remove="handleRemoveItem"
          />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col cols="6">
          <p class="text-h5">
            Итого: {{ totalCount }} товаров на {{ totalCost }} {{ currency }}
          </p>
        </v-col>
        <v-col cols="6" align="end">
          <v-btn variant="tonal" color="primary" @click="handlePlaceAnOrder">Оформить заказ</v-btn>
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
  
  <v-dialog
    v-model="isVisibleDialog"
    width="auto"
  >
    <v-card color="success">
      <v-card-text>
        Поздравляем с успешным оформлением заказа!
      </v-card-text>
      <v-card-actions>
        <v-btn variant="tonal" class="primary" @click="handleCloseDialog">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/store/cart';

const store = useCartStore();
const { cartList: cartItems, cartItemsCount, totalCount, totalCost, currency } = toRefs(store);
const { clearCartItem, incrementCartItemCount, decrementCartItemCount, removeCartItem } = store;

definePageMeta({
  title: 'Корзина'
});

const isVisibleDialog = ref<boolean>(false);

const isExist = computed((): boolean => !!cartItemsCount.value);

const handleIncrementItem = (id: number): void => {
  incrementCartItemCount(id);
}

const handleDecrementItem = (id: number): void => {
  decrementCartItemCount(id);
}

const handleRemoveItem = (id: number): void => {
  removeCartItem(id);
}

const clearCart = (): void => {
  clearCartItem();
}

const handleClearCart = (): void => {
  clearCart();
}

const handlePlaceAnOrder = (): void => {
  isVisibleDialog.value = true;
  clearCart();
}

const handleCloseDialog = (): void => {
  isVisibleDialog.value = false;
}
</script>