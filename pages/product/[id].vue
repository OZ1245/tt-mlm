<template>
  <v-container v-if="product">
    <v-row>
      <v-col cols="6">
        <v-img :src="product.image" width="100%" max-height="600" contain />
      </v-col>
      <v-col cols="6">
        <v-list>
          <v-list-item>
            <h2 class="text-h5">{{ product.title }}</h2>
          </v-list-item>
          
          <v-list-item>
            <p>{{ product.price }} {{ currency }}</p>
          </v-list-item>
          
          <v-list-item-action>
            <v-btn
              v-if="!isExists"
              variant="tonal"
              color="primary"
              @click="handleBuyProduct"
            >
              Купить
            </v-btn>
            <product-counter
              v-else
              :count="count"
              @decrement="handleDecrementProductCount"
              @increment="handleIncrementProductCount"
            />
          </v-list-item-action>
        </v-list>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col>
        <article>
          <h3 class="text-h6">Описание товара</h3>
          <p>{{ product.description }}</p>
        </article>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/types';
import { useCartStore } from '~/store/cart';
import { getProduct } from "~/api";

const route = useRoute();
const snackbar = useSnackbar();
const { getCartItemCountById, currency, decrementCartItemCount, incrementCartItemCount, addCartItem } = useCartStore();

const isLoading = ref<boolean>(false);
const product = ref<IProduct | null>(null);

const count = computed((): number => {
  if (product.value) {
    return getCartItemCountById(product.value.id);
  }
  
  return 0;
});
const isExists = computed((): boolean => !!count.value);

const handleBuyProduct = () => {
  if (!product.value) return;
  
  addCartItem({
    ...product.value,
    count: 1
  });
}

const fetchProduct = async () => {
  isLoading.value = true;
  
  try {
    product.value = await getProduct(route.params.id);
  } catch (error) {
    snackbar.add({
      type: 'error',
      text: `Ошибка получения данных о товаре: ${error}`,
    });
  } finally {
    isLoading.value = false;
  }
}

const initPage = async () => {
  await fetchProduct();
  
  useHead({
    title: product.value?.title || 'Товар'
  });
  definePageMeta({
    breadcrumb: product.value?.title // FIXME: пустая строка вместо значения
  });
}

const handleIncrementProductCount = () => {
  if (!product.value) return;
  
  incrementCartItemCount(product.value.id);
}
const handleDecrementProductCount = () => {
  if (!product.value) return;
  
  decrementCartItemCount(product.value.id);
}

initPage();
</script>