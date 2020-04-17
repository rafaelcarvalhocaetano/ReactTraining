<template>
  <div class="dashboard">
    <sidenav />
    <div class="header">
      <img src="../assets/__logo/pipefy.png" alt="Pipefy">
      <p>Sistema de Dashboard</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Sidenav from '../components/Sidenav.vue';

@Component({
  components: {
    sidenav: Sidenav
  }
})
export default class Dashboard extends Vue {

}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>