<template>
  <div class="configuration">
    <div class="count-porcenter" :class="{'primeiro': true, 'segundo': true, 'terceiro': true}"></div>
    <div class="count">
      <span>Passo 1 de 3</span>
    </div>
    <div class="form-config">
      <h3>Vamos configurar sua empresa</h3>
      <div class="center">
       <label for="config">Qual o nome da sua empresa?</label>
       <input type="text" class="input-control" name="config" v-model="empresa" :input="actBtn()">
       <button class="btn-action" :class="{'disabled': !showButton }">
         <span>Ok</span>
         <i class="fas fa-chevron-right"></i>
       </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import { Component } from 'vue-property-decorator';

  @Component
  export default class RegisterForm extends Vue {
    public empresa: string = '';
    public showButton = false;

    
    public actBtn() {
      if (this.empresa.length && this.empresa.length >= 3) {
        this.showButton = true;
      }
    }





  } 
</script>

<style scoped lang="scss">
@import './RegisterForm.scss';
</style>