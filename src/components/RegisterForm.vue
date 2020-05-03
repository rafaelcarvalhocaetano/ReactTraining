<template>
  <div class="configuration">
    <ProgressCount :interator="interator" />

    <!-- COUNT -->
    <div class="count">
      <span>Passo {{ interator }} de 5</span>
    </div>

    <!-- FORM 1 -->
    <div class="form-config" v-if="interator < 4">
      <h3>Vamos configurar sua empresa</h3>
      <div class="center">
        <Enterprise
          :id="'enterprise'"
          :labelText="'Qual o nome da sua empresa?'"
          @send-value="getText"
          @action-button="interator = 1"/>

        <Process 
          v-if="interator >= 1"
          :label="'Você tem um processo especifico que você deseja gerenciar'"
          @sendProcess="getProcess" />

        <label for="config" v-if="interator >= 2">Que tipo de processo você deseja gerenciar?</label>
        <Selection :listSelected="list" v-if="interator >= 2" @item="getValue($event)"/>
        <button class="btn-action" :class="{'continue': interator >= 3}" v-if="interator >= 3" @click="interator = 4">
          <span>Ok, vamos continuar</span>
          <i class="fas fa-chevron-right"></i>
        </button>
       </div>
    </div>

    <!-- FORM 2 -->
    <ProfileForm
      v-if="interator === 4"
      :titleProfile="'Atualize seu perfil'"
      @sendForm="getForm"
      @Interator="addList" />

    <ListCards :list="listIcons" v-if="interator === 5" />
  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import ListCards from './ListCards.vue';
import Enterprise from './Enterprise.vue';
import Process from './Process.vue';
import ProfileForm from './ProfileForm.vue';

import Selection from '@/shared/select/Select.vue';
import ProgressCount from '@/shared/progress-count/ProgressCount.vue';

import { List, ItemCard, Profile } from '@/model/List';
import { State } from 'vuex-class';


@Component({
  components: {
    Selection: Selection,
    ListCards: ListCards,
    ProgressCount: ProgressCount,
    Enterprise: Enterprise,
    Process: Process,
    ProfileForm: ProfileForm
  }
})
export default class RegisterForm extends Vue {
  public interator: number = 0;
  public name = '';
  public phone = '';

  @State('list_options') public list: List [];

  @State('list_icons') public listIcons: ItemCard [];

  created() {
    this.interator = 0;
  }

  public progressAct() {
    console.log(' in ', this.interator);
    this.interator += 1;
    console.log(' in ', this.interator);

  }

  getValue(event: string) {
    if (event) {
      this.interator = 3;
    }
  }

  public getText(data: string) {
    console.log(' empresa ', data);
  }

  getProcess(data: boolean) {
    this.interator = 2;
    console.log(' processo ', data);
  }

  getForm(data: Profile) {
    console.log(' formulario ', data);
  }

  public addList() {
    this.interator += 1;
  }
  

} 
</script>

<style lang="scss" scoped>
  @import './RegisterForm.scss';
</style>