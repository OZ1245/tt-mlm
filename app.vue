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
    
    <nuxt-snackbar/>
  </nuxt-layout>
</template>

<script lang="ts" setup>
import type { IBreadcrumb } from '~/types';

const route = useRoute();

const breadcrumbs = computed(() => {
  let items: IBreadcrumb[] = [];
  
  // if (route.matched.length) {
  //   items.push({
  //     title: 'Главная',
  //     to: '/',
  //   });
  // }

  route.matched?.forEach((item, index) => {
    console.log(item);
    items.push({
      title: item.meta.breadcrumb as string || '',
      to: item.path,
      disabled: !(route.matched.length - 1 < index)
    })
  });
  
  return items;
});

const initApp = () => {
  useHead({
    titleTemplate: '%s | SomeStore',
  });
  definePageMeta({
    breadcrumb: 'Главная'
  });
}

initApp();
</script>

<style lang="scss">
.app__main {
  max-width: 1200px;
  min-height: 300px;
}
</style>
