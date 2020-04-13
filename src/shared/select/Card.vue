<template>
  <div class="card">
    <i :class="dataCards.icon" :style="{'color': dataCards.color}"></i>
    <h3 class="description">{{ dataCards.description }}</h3>
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ItemCard } from '../../model/List';

@Component
export default class Card extends Vue {
  
  @Prop() dataCards?: ItemCard;
}
</script>

<style lang="scss" scoped>
@import './Card.scss';
</style>