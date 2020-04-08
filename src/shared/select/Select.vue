
<template>
  <div class="selection">
    <button class="btn-selected" @click="openDropDown = !openDropDown; actionRotate">
      <span>{{ item }}</span>
      <div :class="{'up': openDropDown}">
        <i class="fas fa-chevron-down" ></i>
      </div>
      <!-- <i class="fas fa-chevron-up" v-show="openDropDown"></i> -->
    </button>
    <ul class="select-list" v-if="openDropDown">
      <li class="select-item">
        <a class="select-action">
          ACTION
        </a>
      </li>
    </ul>
  </div>
</template>




<script lang="ts">
import Vue from 'vue'

import { Component } from 'vue-property-decorator';

@Component({})
export default class Select extends Vue {

  public openDropDown: boolean = false;
  public item = 'Item Selecionado';
  public rotateValue = 0;

  public actionRotate() {
    if (this.openDropDown) {
      this.rotateValue += 90;
    }
  }

}
</script>

<style lang="scss" scoped>
@import './Select.scss';
</style>