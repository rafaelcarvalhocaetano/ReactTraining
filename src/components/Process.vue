<template>
  <div class="process">
    <label>{{ label }}</label>
    <div class="act">
      <button class="btn-act" @click="selectActionButton()" :class="{'selected': isProcess}">
        <span>Sim</span>
      </button>
      <button class="btn-act" @click="selectActionButton()" :class="{'selected': !isProcess}">
        <span>Não</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

import { Emit, Prop } from 'vue-property-decorator';

@Component({})
export default class Process extends Vue {
  
  @Prop() label?: string;

  public isProcess: boolean = false;

  public selectActionButton() {
    this.isProcess = !this.isProcess;
    this.sendProcess(this.isProcess);
  }

  @Emit('sendProcess') sendProcess(data: boolean) {}

}
</script>

<style lang="scss" scoped>
  @import './Process.scss';
</style>