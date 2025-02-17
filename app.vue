<template>
  <NuxtLoadingIndicator/>
  <NuxtLayout class="app">
    <v-layout>
      <AppHeader/>
      
      <v-main class="app__main" style="min-height: 300px;">
        <NuxtPage/>
      </v-main>
      
      <AppFooter/>
    </v-layout>
  </NuxtLayout>
</template>

<style lang="scss">
.app__main {
  max-width: 1200px;
}
</style>
