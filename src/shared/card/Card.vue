<template>
  <div class="card">
    <i :class="dataCard.icon" :style="{'color': dataCard.color}"></i>
    <h3 class="description">{{ dataCard.description }}</h3>
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { ItemCard } from '@/model/List';

@Component({})
export default class Card extends Vue {
  
  @Prop() dataCard: ItemCard;

  created() {
    console.log(' data 2 ', this.dataCard);
  }
}
</script>

<style lang="scss" scoped>
@import './Card.scss';
</style>