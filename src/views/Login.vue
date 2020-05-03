<template>
  <div class="login">
    <Header :type="1"/>
    <div class="login-details">
      <Items class="item" v-if="listItems.length || title" :list="listItems" :title="title" />
      <FormLogin class="form" />
    </div>
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

import Items from '../components/Items.vue';
import Header from '../shared/header/Header.vue';
import FormLogin from '../components/FormLogin.vue';

import { Item } from '../model/List';
import { State } from 'vuex-class';


@Component({
  components: {
    Header: Header,
    Items: Items,
    FormLogin: FormLogin
  }
})
export default class Login extends Vue {

  @State('list_items') public listItems: Item [];
  
  public imgURL = '@/assets/log/pipefy.png';
  public title: string = 'Obtenha um impacto maior e traga ordem ao seu processo';
}
</script>

<style lang="scss" scoped>
  @import './Login.scss';
</style>