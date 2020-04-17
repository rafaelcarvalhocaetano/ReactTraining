<template>
  <div class="login">
    <Header />
    <div class="login-details">
      <Items class="item" v-if="listItems.length || title" :list="listItems" :title="title" />
      <FormLogin class="form" />
    </div>
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';

import { Component } from 'vue-property-decorator';
import Items from '../components/Items.vue';
import Header from '../components/Header.vue';
import FormLogin from '../components/FormLogin.vue';

import { Item } from '../model/List';

@Component({
  components: {
    Header,
    Items,
    FormLogin
  }
})
export default class Login extends Vue {

  public imgURL = '../assets/__logo/pipefy.png';
  public listItems: Item [] = [
    {
      name: 'process',
      icon: 'fas fa-microchip',
      description: 'Padronize seu processos e elimine ineficiências.'
    },
    {
      name: 'process',
      icon: 'far fa-eye',
      description: 'Saiba tudo o que está acontecendo como o seu processo e resolva os problemas com antecedência.'
    },
    {
      name: 'process',
      icon: 'far fa-clock',
      description: 'Seu processo inteiro funcionando sem você mexer o dedo.'
    }
  ];
  public title: string = 'Obtenha um impacto maior e traga ordem ao seu processo';
}
</script>

<style lang="sass" scoped>
  @import './Login.scss';
</style>