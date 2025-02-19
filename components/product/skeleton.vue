<template>
  <v-row>
    <v-col cols="3" v-for="i in 8" :key="i">
      <v-skeleton-loader
        class="mx-auto border"
        type="card, actions"
      ></v-skeleton-loader>
    </v-col>
  </v-row>
</template>