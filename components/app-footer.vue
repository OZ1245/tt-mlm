
<template>
  <v-footer
    name="footer"
    app
    color="secondary"
  >
    <v-row justify="center">
      <v-col class="text-center">
        {{ year }} — <a href="http://github.com/oz1245">Hope Halfbreed</a> for MLM Soft.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts" setup>
const year = computed(() => new Date().getFullYear());
</script>