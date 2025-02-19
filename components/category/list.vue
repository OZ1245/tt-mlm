
<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="3" v-for="(item, index) in list" :key="index">
        <category-item :name="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{list: string[]}>(), {
  list: () => ([]),
});

const { list } = toRefs(props);
</script>