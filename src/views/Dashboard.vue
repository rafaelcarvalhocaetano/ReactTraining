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
          <dndlist :title="'Test 0001'" :index="i" :listItems="listDashboard[i].listDranAndDrop" @dnd="dataDND" />
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

import { DranAndDropList } from '../model/dndElement';
import DNDList from '../components/DNDList.vue';


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
          id: 'bc9a5228-f552-44e4-9ce1-8eb3cd5dd72e',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: '39e04df1-dccf-490a-824e-4058678cc0',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        },
         {
          id: '3af7c8b0-ac87-4421-a02',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: '028c601e-c812-4ed5-b02c-014e89a1',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        },
         {
          id: '028c601e-c812-7y65t-b02c-0a1',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: 'ujh765rt-f552-44e4-9ce1-58u7y',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: '17c27676-b514-4dad-9769-a8433e',
          description: 'Test 001',
          auth: 'Rafael Carvalho'
        },
        {
          id: '17c27676-b514-4dad-9769-a53133e',
          description: 'Test 002',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: 'a482e327-c866-4b85-9631-20d2bb',
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
    console.log("Dashboard -> action -> e", e)
    this.openModal = false;
    this.listDashboard[0].listDranAndDrop.push(
      {
      id: `GT67201HGH981B-9NBI8987GH90-NU9N${e.length}`,
      description: `${e}`,
      auth: `Added ${e.length}`
    });
  }

  public dataDND(data: any) {
    let dataT: any = null;
    let currentIndex: any = null;
    this.listDashboard.map((x, i) => {
      x.listDranAndDrop.map((t, ind) => {
        if (data.id === t.id) {
          this.listDashboard[data.index].listDranAndDrop.push(t);
          this.listDashboard[i].listDranAndDrop.splice(ind, 1);
        }
      });
    }); 
  }


}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>