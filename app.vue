<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout>
    <v-layout>
      <AppHeader/>
      
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <NuxtPage/>
      </v-main>
      
      <AppFooter/>
    </v-layout>
  </NuxtLayout>
</template>
