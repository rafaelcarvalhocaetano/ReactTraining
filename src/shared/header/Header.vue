<template>
   <div class="header" :class="{'tp': type === 2}">
    <transition name="slide" mode="out-in">
      <button class="btn-action" @click="show">
          <i class="fas fa-bars" v-if="!showMenu"></i>
          <i class="fas fa-times" v-if="showMenu"></i>
      </button>
    </transition>
    <img src="@/assets/log/pipefy_brc.png" alt="Pipefy">
    <p v-if="type === 2">Drag And Drop</p>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {

  @Prop() type: boolean;
  @Emit('emitOpenMenu') emitOpenMenu(data) {
    return data;
  }
  public showMenu = false;

  public show() {
    this.showMenu = !this.showMenu;
    this.emitOpenMenu(this.showMenu);
  }


}
</script>

<style lang="scss" scoped>
  @import './Header.scss';
</style>