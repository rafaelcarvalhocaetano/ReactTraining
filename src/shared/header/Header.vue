<template>
   <div class="header" :class="{'tp': type === 2}">
    <img src="@/assets/__logo/pipefy_brc.png" alt="Pipefy">
    <p v-if="type === 2">Drag And Drop</p>
  </div>
</template>

<script>

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue { 
  @Prop() type;
}
</script>

<style lang="scss" scoped>
  @import './Header.scss';
</style>