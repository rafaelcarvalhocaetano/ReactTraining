<template>
  <div class="form-config">
    <h3>{{ titleProfile }}</h3>
    <form class="center" @submit.prevent="getForm">       
      <label for="name">Seu nome completo</label>
      <input type="text" class="input-control" name="config"
        v-model="profileInput.name" :input="actBtn()" autocomplete="off"
        :class="{'select': profileInput.name.length}" id="name">

      <input type="text" class="input-control" name="config" 
        v-model="profileInput.phone" :input="actBtn()" autocomplete="off"
        :class="{'select': profileInput.phone.length}" >

      <button type="submit" class="btn-action" :class="{'disabled': !showButton }" 
        @click="request">
        <span>Ok</span>
        <i class="fas fa-chevron-right"></i>
      </button>
    </form>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

import { Emit, Prop } from 'vue-property-decorator';
import { Profile } from '@/model/List';

@Component({})
export default class ProfileForm extends Vue {

  @Prop() titleProfile?: string;
  @Emit('sendForm') sendForm(data: Profile) {}
  @Emit('Interator') Interator() {}

  public showButton = false;
  public profileInput: Profile = {
    name: '',
    phone: ''
  };

  public actBtn() {
    if (this.profileInput.name.length > 3 && this.profileInput.phone.length >= 9) {
      this.showButton = true;
    }
  }


  public getForm() {
    this.sendForm(this.profileInput);
  }

  public request() {
    if (this.profileInput.name.length > 3 && this.profileInput.phone.length >= 9) {
      this.Interator();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './ProfileForm.scss';
</style>