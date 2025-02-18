<template>
  <v-btn-group
    color="primary"
    variant="outlined"
    density="compact"
  >
    <v-btn variant="tonal" color="primary" :disabled="isDisabledDecrementedButton" @click="handleDecrementCount">
      <v-icon icon="mdi-minus"/>
    </v-btn>
    <v-btn class="product__button">{{ count }}</v-btn>
    <v-btn variant="tonal" color="primary" @click="handleIncrementCount">
      <v-icon icon="mdi-plus"/>
    </v-btn>
  </v-btn-group>
</template>

<script lang="ts" setup>
import type { IProductCounterProps } from '~/types';

const props = withDefaults(defineProps<IProductCounterProps>(), {
  count: 0,
});
const { count } = toRefs(props);

const emits = defineEmits<{
  (e: 'decrement' | 'increment'): void
}>();

const isDisabledDecrementedButton = computed(() => count.value === 0);

const handleDecrementCount = () => {
  emits('decrement');
};

const handleIncrementCount = () => {
  emits('increment');
}
</script>