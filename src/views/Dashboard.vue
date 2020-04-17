<template>
  <div class="dashboard">
    <sidenav />
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