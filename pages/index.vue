<template>
  <div class="container">
    <h1 class="heading">Brewdog Beers</h1>
    <div v-if="isLoading">Loading...</div>
    <div class="beers" v-else>
      <div v-for="beer in beers" :key="beer.id">
        <beer-card :beer="beer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { Beer } from '@/types';

export default defineComponent({
  components: {
    BeerCard: () => import('@/components/BeerCard.vue'),
  },
  setup() {
    const beers = ref<Beer[]>([]);
    const isLoading = ref(true);

    onMounted(async () => {
      try {
        const response = await fetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012');
        const data = await response.json();
        beers.value = data
          .filter((beer: Beer) => !beer.ingredients.hops.some((hop: any) => hop.name.toLowerCase() === 'centennial'))
          .sort((a: Beer, b: Beer) => a.abv - b.abv);
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      beers,
      isLoading,
    };
  },
});
</script>

<style scoped>
  .container {
    padding: 3rem;
  }
  .heading {
    background-color: #1d374f;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 32px;
    color: #efdb9f;
    padding: 5px;
    border-radius: 5px;
    width: fit-content;
  }
  .beers {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
</style>
