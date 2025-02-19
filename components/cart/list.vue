<template>
  <v-container>
    <v-row v-for="(item, index) in list" :key="index">
      <v-col>
        <cart-item
          v-bind="item"
          @increment="handleIncrementCount(item.id)"
          @decrement="handleDecrementCount(item.id)"
          @remove="handleRemoveItem(item.id)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { ICartListProps } from '~/types';

const props = defineProps<ICartListProps>();
const { list } = toRefs(props);

const emits = defineEmits<{
  (e: 'decrement' | 'increment' | 'remove', id: number): void;
}>();

const handleDecrementCount = (id: number) => {
  emits('decrement', id);
};

const handleIncrementCount = (id: number) => {
  emits('increment', id);
}

const handleRemoveItem = (id: number) => {
  emits('remove', id);
}
</script>