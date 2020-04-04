<template>
  <div class="login">
    <div class="login-header">
      <p>pipefy</p>
    </div>

    <div class="login-details">
      <Items v-if="listItems.length || title" :list="listItems" :title="title"/>

      <form class="form">
        <h2>FORM</h2>
      </form>
    </div>
    
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Items from '../components/Items.vue';
import { Item } from '../model/List';

@Component({
  components: {
    Items
  }
})
export default class Login extends Vue {

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
  @import './login.scss';
</style>