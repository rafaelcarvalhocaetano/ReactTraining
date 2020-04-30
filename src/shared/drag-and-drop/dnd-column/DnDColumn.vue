<template>
  <div class="list-container">
    <div class="added-title">
      <h2>{{ title }}</h2>
      <button class="btn-action" @click="openDrop = !openDrop">
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <Actions v-if="openDrop" :listAction="listAct" @close="openDrop = false" />
    </div>
    <ul class="dnd-list"  @dragover.prevent=""  @drop.prevent="drop" >
      <li class="dnd-item" v-for="(item, i) of listItems" :key="i" :uuid="item.id" 
        @dragover.prevent="dragOver($event, item)">
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

  @Prop() public title: string;
  @Prop() public listItems: DranAndDrop [];
  @Prop() public index: number;
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

  @Emit('dnd') public dndEmitter(data: any) {
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

  public cardIdNumber = null;
  public getIndexs = [];
 
  public drop(e) {
    this.getIndexs = [];
    this.cardIdNumber = e.dataTransfer.getData('card');
    const card = document.getElementById(this.cardIdNumber) as HTMLElement;
    const dataOld = this.listItems[this.newIndex];
    const dataNew = this.listItems[this.oldIndex];
     if (e.target.classList.contains('move')) {
      e.target.classList.remove('move');
    }
    if (dataOld && dataNew) {
      this.listMoveUpDown(this.listItems, this.newIndex, this.oldIndex);
    } else {
      this.dndEmitter({
        id: card.id,
        index: this.index
      });
    }
    e.target.classList.remove('over')
    if (e.target.classList.contains('move')) {
      e.target.classList.remove('move');
    }
    // e.target.appendChild(card);
  }

  private listMoveUpDown(list: DranAndDrop [], from: number, to: number): void {
    var element = list[from];
    list.splice(from, 1);
    list.splice(to, 0, element);
  }
   
  public dragOver(e: DragEvent, item: DranAndDrop) {
    this.getIndexs.push(item.id);
    this.oldIndex = this.listItems.findIndex(x => x.id === this.getIndexs[0]);
    this.newIndex = this.listItems.findIndex(x => x.id === item.id);
  }

}
</script>

<style lang="scss" scoped>
  @import './DnDColumn.scss';
</style>