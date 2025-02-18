<template>
  <v-app-bar color="primary" class="app-header">
    <template #title>
      <nuxt-link to="/" class="app-header__link">
        <h1 class="app-header__title">
          SomeStore
        </h1>
      </nuxt-link>
    </template>
    
    <template #append>
      <v-btn stacked>
        <v-badge v-model="isBadgeVisible" color="error" dot>
            <v-icon icon="mdi-cart-outline"/>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useIndexStore } from '~/store';

const { getCartItemsCount } = useIndexStore();

const isBadgeVisible = computed(() => !!getCartItemsCount);
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