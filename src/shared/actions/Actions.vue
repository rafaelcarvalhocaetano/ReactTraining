<template>
  <transition name="dpd">
    <ul class="dropdown">
      <li class="dpd-item" v-for="(item, i) of listAction" :key="i">
        <a class="dpd-action" @click="closeDropDown(item)">
          <i :class="item.icon"></i>
          <span>{{ item.description }}</span>
        </a>
      </li>
    </ul>
  </transition>  
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

import { Prop, Emit } from 'vue-property-decorator';


@Component({})
export default class Actions extends Vue {

  @Prop() listAction!: Actions[];

  @Emit('close') public closeDropDown(data: any) {
    return data;
  }

}
</script>

<style lang="scss" scoped>
@import './Actions.scss';
</style>