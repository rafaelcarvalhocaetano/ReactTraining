<template>
  <div class="form-login">
    <div class="form-full">
      <div class="form-readme">
        <h3 class="title">Bem-vindo a bordo!</h3>
        <p>Organize seu time, customize seus processos e ganhe tempo com o Pipefy!</p>
      </div>
      <form class="form">
        <label for="email">Seu email de trabalho</label>
        <input type="text" class="form-control" placeholder="voce@empresa.com.br" id="email" name="email">
        <button class="btn-submited" :class="{'disabled': true}">
          <span></span>
          <span>Vamos começar</span>
          <i class="fas fa-chevron-right"></i>
        </button>
      </form>
      <div class="form-login-alternative">
        <p>Ou continue com:</p>
        <div class="form-action">
          <button class="btn-github">
            <i class="fab fa-github"></i>
            <span>Github</span>
          </button>
          <button class="btn-google">
            <img src="../assets/__images/google.png" class="form-img" alt="Google">
            <span>Google</span>
          </button>   
        </div>  
      </div>
      <small>Ao criar uma conta você estará concordadndo com a <a href="#">Politica de Privacidade. Termos e Condicões</a> e uso de Cookies</small>
    </div>
    <p class="login">Já tem uma conta Pipefy? <a href="#">Acessar</a></p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator';


  @Component
  export default class FormLogin extends Vue {

  }
</script>

<style scoped lang="sass">
  @import './FormLogin.scss';
</style>