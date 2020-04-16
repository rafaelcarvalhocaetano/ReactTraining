<template>
  <div class="form-login">
    <div class="form-full">
      <div class="form-readme">
        <h3 class="title">Bem-vindo a bordo!</h3>
        <p>Organize seu time, customize seus processos e ganhe tempo com o Pipefy!</p>
      </div>
      <div class="form">
        <label for="email">Seu email de trabalho</label>
        <input type="text" class="form-control" placeholder="voce@empresa.com.br" 
        id="email" name="email" v-model.trim.lazy="email" :input="getValue()">
        <button class="btn-submited" :class="{'disabled': !flag }" @click="router">
          <span></span>
          <span>Vamos começar</span>
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
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
    <p class="login">Já tem uma conta Pipefy? <router-link to="/access">Acessar</router-link></p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator';

  @Component({})
  export default class FormLogin extends Vue {

    public email: string = '';
    public flag = false;

    public getValue() {
      if (this.email !== null) {
        const emailTest = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if (emailTest.test(this.email)) {
          this.flag = true;
        }
      }
    }

    public router() {
      this.$router.push('/register');
    }


  }
</script>

<style scoped lang="sass">
  @import './FormLogin.scss';
</style>