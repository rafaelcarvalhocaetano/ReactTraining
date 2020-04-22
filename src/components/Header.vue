<template>
   <div class="header" :class="{'tp': type === 2}">
    <img src="../assets/__logo/pipefy.png" alt="Pipefy">
    <p v-if="type === 2">Sistema de Drag And Drop</p>
  </div>
</template>

<script>

import Vue from 'vue';

import { Component, Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue { 
  @Prop() type;
}
</script>

<style lang="sass" scoped>
  @import './Header.scss';
</style>