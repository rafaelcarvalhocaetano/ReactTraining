<template>
  <div class="list-container">
    <div class="added-title">
      <h2>{{ title }}</h2>
      <button class="btn-action" @click="openDrop = !openDrop">
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <Actions v-if="openDrop" :listAction="listAct" @close="getAction" />
    </div>
    <ul class="dnd-list"  @dragover.prevent=""  @drop.prevent="drop" >
      <li class="dnd-item" v-for="(item, i) of listItems" :key="i" :uuid="item.id" 
        @dragover.prevent="dragover($event, item)"
        @drag="drag">
        <dndcard 
          :uuid="item.id" :descriptionCard="item.description" 
          :auth="letras(item.auth)"/>
      </li>
    </ul>
    <form class="plus" v-if="newItem" @submit.prevent="dndForm">
      <input type="text" id="item" class="input-control" 
        placeholder="Added Item" v-model="innerValue" name="innerValue"
        autocomplete="off" autofocus="on">
      <button type="submit" class="submited" id="dnd-add-item">
        <i class="fa fa-plus"></i>
      </button>
    </form>
    <button id="dnd-add-card" class="added" @click="newItem = !newItem"  v-if="!newItem">
      <i class="fa fa-plus"></i>
      <span>Adicionar outro cartão</span>
    </button>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

import DNDCard from '../dnd-card/DNDCard.vue';

import { DranAndDrop } from '@/model/dndElement';
import Actions from '@/shared/actions/Actions.vue';
import { Action } from '@/model/List';

@Component({
  components: {
    dndcard: DNDCard,
    Actions: Actions
  }
})
export default class DnDColumn extends Vue {

  @Prop() title?: string;
  @Prop() listItems!: DranAndDrop [];
  @Prop() index!: number;
  public oldIndex = null;
  public newIndex = null;

  public innerValue: string = '';
  public newItem = false;
  public openDrop = false;
  public listAct: Action [] = [
     {
      icon: 'fas fa-minus-circle',
      description: 'remover',
      type: 'delete'
    },
     {
      icon: 'fas fa-plus-circle',
      description: 'Adicionando',
      type: 'post'
    },
     {
      icon: 'fas fa-plus-circle',
      description: 'Editando',
      type: 'delete'
    }
  ]

  public dataItem = null;

  @Emit('dnd') public dnd(data: any) {
    return data;
  }

  public letras = (item: string) => {
    let data = null;
    if (item) {
      item.replace(' ', (r, b, a) => data = a.charAt(0) + a.charAt(b + 1));
    }
    return data;
  }

  //generic test
  public dndForm() {
    this.listItems.push({
      id: `GT67201HGH981B-9NBI8987GH90-NU9N${this.innerValue.length}`,
      description: `${this.innerValue}`,
      auth: `Test ${this.innerValue.length}`
    });
    this.innerValue = '';
    this.newItem = false;
  }

  public getAction(data: any) {
    this.openDrop = false;
  }

  public cardIdNumber = null;
  public getIndexs = [];
  public getPosition = [];
  public idIndex: DranAndDrop = {
    id: '',
    description: '',
    auth: ''
  };
  

 
  public drop(e: DragEvent | any) {
    const card_id = e.dataTransfer.getData('card');
    e.target.classList.add('rota');

    this.cardIdNumber = card_id;
    const card = document.getElementById(card_id) as HTMLElement;
    const data = {
      id: card.id,
      index: this.index
    }
    this.dnd(data);
    this.getIndexs = [];
    // ev.target.appendChild(card);

    // this.listItems.splice(this.newIndex, 0, this.listItems[this.oldIndex])

    const dataOld = this.listItems[this.newIndex];
    const dataNew = this.listItems[this.oldIndex];
    // console.log("DnDColumn -> drop -> dataOld", dataOld.description)

    // this.listItems.forEach((x, i) => {
    //   // if (dataOld.id === x.id) {
    //   //   this.listItems[this.listItems.indexOf(dataOld)] = this.listItems[this.oldIndex];
    //   //   x[this.listItems.indexOf(dataNew)] = dataOld;
    //   // }

    //   if (dataOld.id === x.id) {
    //     console.log(' di 1 ', i);
    //     // x.id =  this.listItems[this.oldIndex].id;
    //     // x.description = this.listItems[this.oldIndex].description;
    //     // x.auth = this.listItems[this.oldIndex].auth;

    //     // x.id =  this.listItems[this.newIndex].id;
    //     // x.description = this.listItems[this.newIndex].description;
    //     // x.auth = this.listItems[this.newIndex].auth;       
    //     // x[this.listItems.indexOf(dataNew)].id = dataOld.id;
    //   }

    //   if (dataNew.id === x.id) {
    //     console.log(' di 2 ', i);

    //   }
    //   // this.listItems[this.listItems.indexOf(dataOld)] = this.listItems[this.oldIndex];
    //   // x[this.listItems.indexOf(dataNew)] = dataOld;
    // });
    this.changePosition(this.listItems, this.newIndex, this.oldIndex);

    // this.changePosition(this.listItems, this.newIndex, this.oldIndex);


  }

   
  public dragover(e: any, item: DranAndDrop) {
    this.getIndexs.push(item.id);
    this.oldIndex = this.listItems.findIndex(x => x.id === this.getIndexs[0]);
    this.newIndex = this.listItems.findIndex(x => x.id === item.id);
  }

  public drag(e: any) {
    this.idIndex = this.listItems.filter(x => x === e) as any;
  }

  public changePosition(arr: DranAndDrop [], from: number, to: number): DranAndDrop [] {
    return arr.splice(from, 0, arr.splice(to, 1)[0]);
  };

}
</script>

<style lang="scss" scoped>
  @import './DnDColumn.scss';
</style>