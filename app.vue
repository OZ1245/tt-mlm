<template>
  <nuxt-loading-indicator/>
  
  <nuxt-layout class="app">
    <v-layout>
      <app-header/>
      
      <v-main class="app__main">
        <v-container>
          <app-page-title :breadcrumbs="breadcrumbs"></app-page-title>
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
  const paths = route.path.split('/').filter(p => p);
  
  const breadcrumbs: IBreadcrumb = paths.map((path, index) => {
    return {
      title: path,
      to: '/' + paths.slice(0, index + 1).join('/')
    }
  });
  
  breadcrumbs.push({
    title: pageTitle.value,
    to: '',
    disabled: true
  })
  
  return breadcrumbs;
});
</script>

<style lang="scss">
.app__main {
  max-width: 1200px;
  min-height: 300px;
}
</style>
