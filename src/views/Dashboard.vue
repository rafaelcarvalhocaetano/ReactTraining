<template>
  <div class="dashboard">
    <sidenav  @options="getOptions" />
    <Header :type="2" />
    <div>
      <transition name="slide" mode="out-in">
        <router-view ></router-view>
      </transition>
    </div>
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
    sidenav: Sidenav,
    Header: Header,
  }
})
export default class Dashboard extends Vue {

  public getOptions(data: string): void {
    this.$router.push(`${data}`);
  }
  
}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>