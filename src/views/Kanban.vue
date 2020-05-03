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
import { State, Getter, Mutation } from 'vuex-class';

@Component({
  components: {
    dndlist: DnDColumn
  }
})
export default class Kanban extends Vue {

  @State('list_title') public listTitle: string [];
  @State('list_cards') public listDashboard: DranAndDropList [];

  @Getter('validatorList') validatorList;
  @Getter('list_cardsMutation') list_cardsMutation;
  @Getter('removeCard') removeCard;


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

  // mounted() {
  // }

}
</script>

<style lang="scss" scoped>
@import './Kanban.scss';
</style>