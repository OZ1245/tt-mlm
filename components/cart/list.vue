<template>
  <v-container>
    <v-row v-for="(item, index) in cartList" :key="index">
      <v-col>
        <cart-item
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :count="item.count"
          
          @increment="handleIncrementItem"
          @decrement="handleDecrementItem"
          @remove="handleRemoveItem"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useIndexStore } from '~/store';

const { cartList, incrementCartItemCount, decrementCartItemCount, removeCartItem } = useIndexStore();

const handleIncrementItem = (id: number): void => {
  incrementCartItemCount(id);
}

const handleDecrementItem = (id: number): void => {
  decrementCartItemCount(id);
}

const handleRemoveItem = (id: number): void => {
  removeCartItem(id);
}
</script>