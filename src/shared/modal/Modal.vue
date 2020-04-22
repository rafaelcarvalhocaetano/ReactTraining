<template>
  <div class="modal">
    <form class="element" @submit.prevent="sendForm">
      <label for="desc">Tarefa</label>
      <input type="text" id="desc" class="input-control" 
        placeholder="Adicione uma nova tarefa" v-model="tarefa"
        autocomplete="off">
      <button class="btn-action" type="submit">
        <i class="fa fa-plus"></i>
      </button>
    </form>
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';
import { Component, Prop, Emit } from 'vue-property-decorator';
import { ItemCard } from '../../model/List';

@Component({})
export default class Modal extends Vue {
  public tarefa: string = '';
  
  @Emit('action') sendValue(data: any) { }

  sendForm() {
    if(this.tarefa.length) {
      this.sendValue(this.tarefa);
      this.tarefa = '';
    }
  }

}
</script>

<style lang="scss" scoped>
@import './Modal.scss';
</style>