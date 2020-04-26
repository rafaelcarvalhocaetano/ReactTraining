<template>
  <div class="list">
    <p>Escolha um template para começar</p>
    <ul class="card-list">
      <li class="card-item" v-for="(item, index) of list" :key="index">
        <a class="card-action" @click="routerAct">
          <Card :dataCards.sync="item"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Prop } from 'vue-property-decorator';
import { ItemCard } from '@/model/List';
import Card from '@/shared/card/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class ListCards extends Vue {
  @Prop() list?: ItemCard [];

  public routerAct() {
    this.$router.push('/dashboard');
  }
}
</script>

<style lang="scss" scoped>
  @import './ListCards.scss';
</style>