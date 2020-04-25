<template>
  <div class="list">
    <div class="added-title">
      <h2>{{ title }}</h2>
      <button class="btn-action" @click="openDrop = !openDrop">
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <Actions v-if="openDrop" :listAction="listAct" @close="getAction" />
    </div>
    <ul class="dnd-list"  @dragover.prevent  @drop.prevent="drop">
      <li class="dnd-item" v-for="(item, i) of listItems" :key="i" :uuid="item.id">
        <dndcard 
          :uuid="item.id" :descriptionCard="item.description" 
          :auth="letras(item.auth)"/>
          {{ item.id }}
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

import { DranAndDrop } from '../model/dndElement';
import DNDCard from '../shared/dnd-card/DNDCard.vue';
import Actions from '../shared/actions/Actions.vue';
import { Action } from '../model/List';

@Component({
  components: {
    dndcard: DNDCard,
    Actions: Actions
  }
})
export default class DNDList extends Vue {

  @Prop() title?: string;
  @Prop() listItems!: DranAndDrop [];
  @Prop() index!: number;

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
    item.replace(' ', (r, b, a) => data = a.charAt(0) + a.charAt(b + 1));
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

  public drop(ev: any) {
    const card_id = ev.dataTransfer.getData('card_id');
    const card: any = document.getElementById(card_id);
    const data = {
      id: card.id,
      index: this.index
    }
    this.dnd(data);
    // ev.target.appendChild(card);

  }
}
</script>

<style lang="scss" scoped>
  @import './DNDList.scss';
</style>