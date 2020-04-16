<template>
  <div class="enterprise">
    <label :for="id">{{ labelText }}</label>
    <input 
      type="text" class="input-control" name="config"
      :id="id"
      v-model="empresa" :input="showButtonText()" autocomplete="off"
      :class="{'select': empresa.length}">
    <button class="btn-action" :class="{'disabled': !showButton }" @click="sendValue">
      <span>Ok</span>
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Emit, Prop } from 'vue-property-decorator';

@Component({})
export default class Enterprise extends Vue {

  @Prop() labelText = null;
  @Prop() id = null;

  public empresa = '';
  public showButton = false;

  @Emit('action-button') sendValue() {}
  @Emit('send-value') sendText(data: string) {}

  public showButtonText() {
    this.sendText(this.empresa);
    if (this.empresa.length && this.empresa.length >= 3) {
      this.showButton = true;
    }
  }

}
</script>

<style lang="scss" scoped>
@import './Enterprise.scss';
</style>