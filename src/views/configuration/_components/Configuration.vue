<template>
  <div class="item">
    <h2>Databases</h2>
    <span>Crie registros para usar em seus processos</span>
    <div class="element">
      <span>Criar nova tabela</span>
      <button class="btn-add" @click="openModal = !openModal">
        <i class="fa fa-plus"></i>
      </button>
    </div>
    <modal v-if="openModal" @action="action"/>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit } from 'vue-property-decorator';
import Modal from '../../../shared/modal/Modal.vue';


@Component({
  components: {
    modal: Modal,
  }
})
export default class Configuration extends Vue {
  
  public openModal = false;

  public addList() {
    this.openModal = !this.openModal;
  }
  
  public action(e: boolean) {
    this.openModal = false;
  }

}
</script>

<style lang="scss" scoped>
  @import './Configuration.scss';
</style>