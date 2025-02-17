<template>
  <v-app-bar color="primary" class="app-header">
    <template #title>
      <NuxtLink to="/" class="app-header__link">
        <h1 class="app-header__title">
          SomeStore
        </h1>
      </NuxtLink>
    </template>
    
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

<style lang="scss">
.app-header__link {
  color: var(--primary-text);
  text-decoration: none;
}

.app-header__title {
  font-size: var(--font-size-normal);
}
</style>