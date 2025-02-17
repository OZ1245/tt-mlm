
<template>
  <v-container class="product">
    <v-row>
      <v-col cols="3" v-for="(item, index) in list" :key="index">
        // Product: {{ item }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{list: string[]}>(), {
  list: () => ([])
});

const { list } = toRefs(props);
</script>