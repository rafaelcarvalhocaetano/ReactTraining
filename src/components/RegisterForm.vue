<template>
  <div class="configuration">
    <div class="count-porcenter" 
      :class="{
        'primeiro': interator === 1, 
        'segundo': interator === 2,
        'terceiro': interator === 3
      }"></div>
    <div class="count">
      <span>Passo 1 de 3</span>
    </div>

    <div class="form-config">
      <h3>Vamos configurar sua empresa</h3>
      <div class="center">
       
        <label for="config">Qual o nome da sua empresa?</label>
        <input type="text" class="input-control" name="config" v-model="empresa" :input="actBtn()" autocomplete="off">
        <button class="btn-action" :class="{'disabled': !showButton }" @click="progressAct">
          <span>Ok</span>
          <i class="fas fa-chevron-right"></i>
        </button>

        <label for="config" v-if="interator >= 2">Você tem um processo especifico que você deseja gerenciar?</label>
        <div class="act" v-if="interator >= 2">
          <button class="btn-act" @click="progressAct">
            <span>Sim</span>
          </button>
          <button class="btn-act" @click="progressAct">
            <span>Não</span>
          </button>
        </div>

        <label for="config" v-if="interator === 3">Qual o nome da sua empresa?</label>
        <input type="text" class="input-control" name="config" 
          v-model="empresa" :input="actBtn()" autocomplete="off"
          v-if="interator === 3">
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
    public interator: number = 0;

    created() {
      this.interator = 0;
    }
    
    public actBtn() {
      if (this.empresa.length && this.empresa.length >= 3) {
        this.showButton = true;
      }
    }

    public progressAct() {
      this.interator += 1;
    }

  } 
</script>

<style scoped lang="scss">
@import './RegisterForm.scss';
</style>