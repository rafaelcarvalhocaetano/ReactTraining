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
        <label for="config">Qual o nome da sua empresa?</label>
        <input type="text" class="input-control" name="config" 
          v-model="empresa" :input="actBtn()" autocomplete="off"
          :class="{'select': empresa.length}">
        <button class="btn-action" :class="{'disabled': !showButton }" @click="progressAct">
          <span>Ok</span>
          <i class="fas fa-chevron-right"></i>
        </button>
        <label class="cgv" v-if="interator >= 1">Você tem um processo especifico que você deseja gerenciar?</label>
        <div class="act" v-if="interator >= 1">
          <button class="btn-act" @click="interator = 2; selectActionButton()" :class="{'selected': isConfirm}">
            <span>Sim</span>
          </button>
          <button class="btn-act" @click="interator = 2; selectActionButton()" :class="{'selected': !isConfirm}">
            <span>Não</span>
          </button>
        </div>
        <label for="config" v-if="interator >= 2">Que tipo de processo você deseja gerenciar?  </label>
        <Selection :listSelected="list" v-if="interator >= 2" @item="getValue($event)"/>
        <button class="btn-action" :class="{'continue': interator >= 3}" v-if="interator >= 3" @click="interator = 4">
          <span>Ok, vamos continuar</span>
          <i class="fas fa-chevron-right"></i>
        </button>
       </div>
    </div>
    <!-- FORM 2 -->
    <div class="form-config" v-if="interator === 4">
      <h3>Atualize seu perfil</h3>
      <div class="center">       
        <label for="name">Seu nome completo</label>
        <input type="text" class="input-control" name="config" 
          v-model="name" :input="actBtn()" autocomplete="off"
          :class="{'select': name.length}" id="name">

        <input type="text" class="input-control" name="config" 
          v-model="phone" :input="actBtn()" autocomplete="off"
          :class="{'select': phone.length}" >

        <button class="btn-action" :class="{'disabled': !showButton }" @click="interator = 5">
          <span>Ok</span>
          <i class="fas fa-chevron-right"></i>
        </button>
       </div>
    </div>

    <ListCards :list="listIcons" v-if="interator >= 5"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  import { Component } from 'vue-property-decorator';

  import Selection from '../shared/select/Select.vue';
  import { List, ItemCard } from '../model/List';
  import ListCards from './ListCards.vue';
  import ProgressCount from './ProgressCount.vue';

  @Component({
    components: {
      Selection,
      ListCards,
      ProgressCount
    }
  })
  export default class RegisterForm extends Vue {
    public empresa: string = '';
    public showButton = false;
    public interator: number = 0;
    public isConfirm = false;
    public name = '';
    public phone = '';

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

    public listIcons: ItemCard [] = [
      {
        icon: 'fas fa-bug',
        description: 'Acompanhamento de Bugs',
        color: '#ccc'
      },
      {
        icon: 'fas fa-desktop',
        description: 'Chamados de TI',
        color: 'blue'
      },
      {
        icon: 'fas fa-headset',
        description: 'Atendimento ao Cliente/Helpdesk',
        color: ''      
      },
      {
        icon: 'fas fa-filter',
        description: 'Pipeline de Vendas',
        color: ''
      },
      {
        icon: 'far fa-check-circle',
        description: 'Lista Simples de Tarefas',
        color: ''      
      },
      {
        icon: 'fas fa-desktop',
        description: 'Desenvolvimento de Software',
        color: ''      
      },
      {
        icon: 'fas fa-chart-line',
        description: 'Gestão de Experimentos - Growth',
        color: ''
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

    getValue(event: string) {
      if (event) {
        this.interator = 3;
      }
    }

  } 
</script>

<style scoped lang="scss">
@import './RegisterForm.scss';
</style>