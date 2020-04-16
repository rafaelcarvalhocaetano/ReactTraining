
<template>
  <div class="count-porcenter" 
    :class="{
      'primeiro': interator === 1, 
      'segundo': interator === 2,
      'terceiro': interator === 3,
      'quarto': interator === 4,
      'quinto': interator === 5
    }">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import { Component, Prop } from 'vue-property-decorator';

  @Component({})
  export default class ProgressCount extends Vue {
    @Prop() interator: number = 0;
  }
</script>
<style scoped lang="scss">
  @import './ProgressCount.scss';
</style>