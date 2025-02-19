
<template>
  <v-footer
    name="footer"
    app
    color="secondary"
  >
    <v-row justify="center">
      <v-col class="text-center">
        {{ year }} — <a :href="authorUrl">Hope Halfbreed</a> for MLM Soft.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
const year = computed(() => new Date().getFullYear());
const authorUrl = '//github.com/oz1245';
</script>