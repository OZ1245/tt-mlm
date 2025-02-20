
<template>
  <v-row v-if="breadcrumbs">
<!--    <v-breadcrumbs :items="breadcrumbs">-->
<!--      <template #prepend>-->
<!--        <v-icon icon="mdi-home" size="small"></v-icon>-->
<!--      </template>-->
<!--    </v-breadcrumbs>-->
  </v-row>
  
  <v-row>
    <h2 class="text-h3" v-text="title"></h2>
  </v-row>
</template>

<script setup lang="ts">
import type { IPageHeaderProps } from '~/types';

const props = withDefaults(defineProps<IPageHeaderProps>(), {
  title: '',
  breadcrumbs: () => ([])
});
const { title, breadcrumbs } = toRefs(props);
</script>