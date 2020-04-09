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

        <label class="cgv" v-if="interator >= 1">Você tem um processo especifico que você deseja gerenciar?</label>
        <div class="act" v-if="interator >= 1">
          <button class="btn-act" @click="progressAct(); selectActionButton()" :class="{'selected': isConfirm}">
            <span>Sim</span>
          </button>
          <button class="btn-act" @click="progressAct(); selectActionButton()" :class="{'selected': !isConfirm}">
            <span>Não</span>
          </button>
        </div>
        <label for="config" v-if="interator === 2">Que tipo de processo você deseja gerenciar?  </label>
        <Selection :listSelected="list" v-if="interator === 2"/>
       </div>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import { Component } from 'vue-property-decorator';
  import Selection from '../shared/select/Select.vue';
import { List } from '../model/List';

  @Component({
    components: {
      Selection
    }
  })
  export default class RegisterForm extends Vue {
    public empresa: string = '';
    public showButton = false;
    public interator: number = 0;
    public isConfirm = false;

    public list: List [] = [
      {
        id: 1,
        description: 'TI'
      },
      {
        id: 2,
        description: 'Governança'
      },
        {
        id: 3,
        description: 'Desenvolvimento'
      },
      {
        id: 4,
        description: 'Infraestrutura'
      },
      {
        id: 5,
        description: 'Arquitetura'
      },
      {
        id: 6,
        description: 'Outros'
      }
    ];

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

    public selectActionButton() {
      this.isConfirm = !this.isConfirm;
    }

  } 
</script>

<style scoped lang="scss">
@import './RegisterForm.scss';
</style>