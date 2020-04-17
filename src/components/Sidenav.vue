<template>
  <ul class="sidenav">
    <li class="sidenav-item" v-for="(item, i) of listIcon" :key="i" :class="{'selected': indexSelect === i}">
      <a class="sidenav-action" @click="indexSelect = i">
        <i :class="item.icon"></i>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';

@Component({})
export default class Sidenav extends Vue {

  public listIcon = [
    {
      icon: 'fas fa-grip-horizontal'
    },
    {
      icon: 'fas fa-columns'
    },
    {
      icon: 'fas fa-robot'
    },
    {
      icon: 'fas fa-globe'
    },
    {
      icon: 'fas fa-question-circle'
    },
    {
      icon: 'far fa-comment-dots'
    }
  ]

  public indexSelect = null;

}
</script>

<style lang="scss" scoped>
  @import './Sidenav.scss';
</style>