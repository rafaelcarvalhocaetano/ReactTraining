<template>
  <transition name="slide" mode="out-in">
    <ul class="sidenav">
      <li class="sidenav-item" v-for="(item, i) of listIcon" :key="i" :class="{'selected': indexSelect === i}">
        <a class="sidenav-action" @click="indexSelect = i; sendOptions(item.router)">
          <i :class="item.icon"></i>
        </a>
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

import { Emit, Prop } from 'vue-property-decorator';

@Component({})
export default class Sidenav extends Vue {
  
  public listIcon = [
    {
      icon: 'fas fa-grip-horizontal',
      router: 'kanban'
    },
    {
      icon: 'fas fa-columns',
      router: 'kanban'
    },
    {
      icon: 'fas fa-robot',
      router: 'configuration'
    },
    {
      icon: 'fas fa-globe',
      router: 'kanban'
    },
    {
      icon: 'fas fa-question-circle',
      router: 'kanban'
    },
    {
      icon: 'far fa-comment-dots',
      router: 'kanban'
    }
  ]

  public indexSelect = null;

  @Emit('options') public sendOptions(data: string) {
    return data;
  }

}
</script>

<style lang="scss" scoped>
  @import './Sidenav.scss';
</style>