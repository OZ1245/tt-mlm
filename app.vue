<template>
  <nuxt-loading-indicator/>
  
  <nuxt-layout class="app">
    <v-layout>
      <app-header/>
      
      <v-main class="app__main">
        <v-container>
          <v-row>
            <v-col>
              <app-page-title :breadcrumbs="breadcrumbs"></app-page-title>
            </v-col>
          </v-row>
          <nuxt-page/>
        </v-container>
      </v-main>
      
      <app-footer/>
    </v-layout>
  </nuxt-layout>
</template>

<script lang="ts" setup>
import type { IBreadcrumb } from '~/types';

const route = useRoute();

const pageTitle = computed(() => route.meta.title as string || '');

const breadcrumbs = computed(() => {
  const breadcrumbs: IBreadcrumb = route.matched.map((item, index) => {
    return {
      title: item.meta.title as string || '',
      to: item.path,
      disabled: !(route.matched.length - 1 < index)
    }
  });
  
  return breadcrumbs;
});
</script>

<style lang="scss">
.app__main {
  max-width: 1200px;
  min-height: 300px;
}
</style>
