<template>
  <div class="beer-card">
    <div class="image-wrapper">
      <img :src="beer.image_url" :alt="beer.name" width="100px" />
    </div>
    <div class="beer-info">
      <h2 class="beer-name">{{ beer.name }}</h2>
      <p class="beer-description">{{ beer.description }}</p>
      <div class="tags">
        <p class="lactose" v-if="beer.ingredients.hops.some(hop => hop.name.toLowerCase().includes('lactose'))">Contains lactose</p>
        <p class="dry-hopped" v-if="beer.method.mash_temp.some(step => step.duration > 60)">Dry hopped</p>
      </div>
      <div class="beer-data">
        <p class="beer-tagline">{{ beer.tagline }}</p>
        <p>ABV: {{ beer.abv }}</p>
        <p>IBU: {{ beer.ibu }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Beer } from '@/types';

export default defineComponent({
  props: {
    beer: {
      type: Object as () => Beer,
      required: true,
    },
  },
});
</script>

<style scoped>
.beer-card {
  /* color: #FFF9EA; */
  margin: 40px 20px;
  display: flex;
  width: 100%;
}
.image-wrapper {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  min-width: 100px;
}
.beer-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.beer-name {
  color: #8C8BB5;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 20px;
}
.beer-description {
  color: #8C8BB5;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
}
.beer-data {
  background-color: #213266;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #efdb9f;
  border-radius: 10px;
  padding: 20px;
  width: fit-content;
}
.tags {
  display: flex;
  gap: 10px;
}
.lactose {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #FDEDEF;
  border-radius: 10px;
  padding: 10px;
  width: fit-content;
  font-weight: bold;
}
.dry-hopped {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #E5FAFD;
  border-radius: 10px;
  padding: 10px;
  width: fit-content;
  font-weight: bold;
}
</style>
