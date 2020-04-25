<template>
  <div class="dashboard">
    <sidenav />
    <Header :type="2"/>

    <div class="list-dashboard">
      <div class="item" >
        <h2>Databases</h2>
        <span>Crie registros para usar em seus processos</span>
        <div class="element">
          <span>Criar nova tabela</span>
          <button class="btn-add" @click="addList">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>

      <div class="dashboard">
        <div v-for="(item, i) of listDashboard" :key="i">
          <dndlist :title="'Test 0001'" :listItems="listDashboard[i].listDranAndDrop" />
        </div>
      </div>


    </div>

    <modal v-if="openModal" @action="action"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Sidenav from '../components/Sidenav.vue';
import Header from '../components/Header.vue';
import Modal from '../shared/modal/Modal.vue';
import DNDList from '../shared/dnd-list/DNDList.vue';

import { DranAndDropList } from '../model/dndElement';


@Component({
  components: {
    sidenav: Sidenav,
    Header: Header,
    modal: Modal,
    dndlist: DNDList
  }
})
export default class Dashboard extends Vue {

  public listDashboard: DranAndDropList [] = [
    {
      listDranAndDrop: [
        {
          id: 'Y6ASD954FD6JS717RHF763',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'Y6ASD954FD6JS7123232HF121',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        },
         {
          id: 'Y6ASD954FD6JS717RHF763',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'Y6ASD954FD6JS7123232HF121',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        },
         {
          id: 'Y6ASD954FD6JS717RHF763',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'Y6ASD954FD6JS7123232HF121',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        },
         {
          id: 'Y6ASD954FD6JS717RHF763',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'Y6ASD954FD6JS7123232HF121',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: 'Y6ASD954FD6JS717RHF763',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'Y6ASD954FD6JS712322HF12',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: 'Y6ASD954FD6JS717RHF763',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        }
      ]
    }
  ];
  public openModal = false;
  public openDrop = false;

  public addList() {
    this.openModal = !this.openModal;
  }

  public action(e: string) {
    this.openModal = false;
  }

}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>