<template>
  <v-app-bar title="SomeStore" color="primary">
    <template #append>
      <v-badge v-model="showBadge">
        <v-btn icon="mdi-cart-outline"></v-btn>
      </v-badge>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useIndexStore } from '~/store';

const { getCartItemsCount } = useIndexStore();

const showBadge = computed(() => !!getCartItemsCount);
</script>