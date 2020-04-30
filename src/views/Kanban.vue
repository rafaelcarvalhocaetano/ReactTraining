<template>
  <div class="kanban">
    <div class="mbl" v-for="(item, i) of listDashboard" :key="i">
      <dndlist :title="listTitle[i]" :index="i" :listItems="listDashboard[i].listDranAndDrop" @dnd="dataDND" />
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import DnDColumn from '@/shared/drag-and-drop/dnd-column/DnDColumn.vue';

import { DranAndDropList } from '@/model/dndElement';

@Component({
  components: {
    dndlist: DnDColumn
  }
})
export default class Kanban extends Vue {

  public listTitle = ['TO DO', 'IN PROGRESS', 'TO VERIFY', 'DONE'];
  
  public listDashboard: DranAndDropList [] = [
    {
      listDranAndDrop: [
        {
          id: 'bc9a5228-f552-44e4-9ce1-8eb3cd5dd72e',
          description: 'RAFAEL',
          auth: 'Rafael Carvalho',
        },
        {
          id: '39e04df1-dccf-490a-824e-4058678cc0',
          description: 'ROSE',
          auth: 'Rafael Carvalho'
        },
         {
          id: '3af7c8b0-ac87-4421-a02',
          description: 'VITOR',
          auth: 'Rafael Carvalho'
        },
        {
          id: '028c601e-c812-4ed5-b02c-014e89a1',
          description: 'BUSCA',
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
          description: 'FOI AGORA',
          auth: 'Rafael Carvalho'
        },
        {
          id: '17c27676-b514-4dad-9769-a53133e',
          description: 'Test',
          auth: 'Rafael Carvalho'
        }
      ]
    },
    {
      listDranAndDrop: [
        {
          id: 'a482e327-c866-4b85-9631-20d2bb',
          description: 'NÃO TEM',
          auth: 'Rafael Carvalho',
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
  
  public openDrop = false;

  public dataDND(data) {
    this.listDashboard.forEach((x, i) => {
      x.listDranAndDrop.forEach((element, index) => {
        if (data.id === element.id) {
          this.listDashboard[data.index].listDranAndDrop.push(element);
          this.listDashboard[i].listDranAndDrop.splice(index, 1);
        }
      });
    }); 
  }

}
</script>

<style lang="scss" scoped>
@import './Kanban.scss';
</style>