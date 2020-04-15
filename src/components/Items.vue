<template>
  <div class="item">
    <ul class="item-readme">
      <h3>{{ title }}</h3>
      <li class="item-item" v-for="(item, i) in list" :key="i">
        <i :class="item.icon"></i>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

import Vue from 'vue';

import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Items extends Vue {
  @Prop() list;
  @Prop() title;
}
</script>

<style lang="scss" scoped>
  @import './Items.scss';
</style>