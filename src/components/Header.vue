<template>
  <div class="header">
    <p>{{ titleHeader }}</p>
  </div>
</template>

<script>

import Vue from 'vue';

import { Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() titleHeader = null;

}
</script>

<style lang="sass" scoped>
  @import './Header.scss';
</style>