<template>
  <v-card>
    <v-row>
      <v-col cols="7">
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>
          <product-counter :count="count" @decrement="handleDecrementCount" @increment="handleIncrementCount"/>
        </v-card-text>
      </v-col>
      
      <v-col cols="5" align="end">
        <v-container>
          <v-row align="center" justify="end">
            <v-col cols="auto">
              <v-card-text>{{ cost }} {{ currency }}</v-card-text>
              <v-card-subtitle>{{ price }} {{ currency }} за шт.</v-card-subtitle>
            </v-col>
            
            <v-col cols="auto">
              <v-btn variant="plain" color="error" icon="mdi-trash-can" title="Убрать из корзины" @click="handleRemoveItem"></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import type { ICartItemProps } from '~/types';
import { useIndexStore } from '~/store';

const { currency } = useIndexStore();

const props = defineProps<ICartItemProps>();
const { name, count, id, price } = toRefs(props);

const emits = defineEmits<{
  (e: 'decrement' | 'increment' | 'remove', id: number): void;
}>();

const cost = computed(() => (price.value || 0) * count.value);

const handleDecrementCount = () => {
  emits('decrement', id.value);
};

const handleIncrementCount = () => {
  emits('increment', id.value);
}

const handleRemoveItem = () => {
  emits('remove', id.value);
}
</script>