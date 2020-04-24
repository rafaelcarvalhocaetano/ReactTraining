
<template>
  <div class="selection">
    <button class="btn-selected" @click="actionRotate" :class="{'select': typeRotate === 1 || typeRotate === 2}">
      <span>{{ item }}</span>
      <i class="fas fa-chevron-down" :class="{'arrow-up': typeRotate === 1, 'arrow-down': typeRotate === 2}"></i>
    </button>
    <ul class="select-list" v-if="openDropDown">
      <li class="select-item" v-for="(item, i) of listSelected" :key="i" @click="sendValue(item.description)">
        <span>{{ item.description }}</span>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

import { Prop, Emit } from 'vue-property-decorator';
import { List } from '../../model/List';


@Component({})
export default class Select extends Vue {

  @Prop() listSelected: any;

  public openDropDown: boolean = false;
  public item = 'Item Selecionado';
  public rotate = 0;
  public typeRotate: number = 0;


  public actionRotate() {
    this.openDropDown = !this.openDropDown; 
    if (this.openDropDown) {
      this.typeRotate = 1;
    } else {
      this.typeRotate = 2;
    }
  }

  @Emit('item') public sendValue(data: string) {
    this.item = data;
    this.openDropDown = false;
  }


  

}
</script>

<style lang="scss" scoped>
@import './Select.scss';
</style>