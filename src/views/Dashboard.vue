<template>
  <div class="dashboard">
    <Sidenav  @options="getOptions" :openMenu="open"/>
    <Header :type="2" @emitOpenMenu="openMenu" class="hdf"/>
    <transition name="slide" mode="out-in">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Modal from '@/shared/modal/Modal.vue';

import { DranAndDropList } from '@/model/dndElement';
import Sidenav from '@/shared/sidenav/Sidenav.vue';
import Header from '@/shared/header/Header.vue';

@Component({
  components: {
    Sidenav: Sidenav,
    Header: Header,
  }
})
export default class Dashboard extends Vue {

  public open: boolean = false;

  public getOptions(data: string): void {
    this.$router.push(`${data}`);
  }
  public openMenu(data: boolean) {
    console.log("Dashboard -> openMenu -> data", data)
    this.open = data;
  }
  
}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>