<template>
  <div class="dashboard">
    <Sidenav class="smn"  @options="getOptions" v-if="open"/>
    <Header :type="2" @emitOpenMenu="openMenu" :flag="!open"/>
    <transition name="slide" mode="out-in">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { mapState, mapGetters } from 'vuex';

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

  // computed
  // get innerValue() {
  //   return mapState(['contador'])
  // }

  public getOptions(data: any): void {
    this.open = false;
    this.$router.push(`${data}`);
  }
  public openMenu(data: any) {
    this.open = data;
  }
  
}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>