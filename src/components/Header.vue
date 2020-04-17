<template>
  <div class="header">
    <img src="../assets/__logo/pipefy.png" alt="Logo">
  </div>
</template>

<script>

import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue { }
</script>

<style lang="sass" scoped>
  @import './Header.scss';
</style>