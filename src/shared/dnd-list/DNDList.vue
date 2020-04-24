<template>
  <div class="list">
    <div class="added-title">
      <h2>{{ title }}</h2>
      <button class="btn-action" @click="openDrop = !openDrop">
        <i class="fas fa-ellipsis-h"></i>
      </button>
      <!-- CRIAR COMPONENTE -->
      <transition name="dpd">
        <ul class="dropdown" v-if="openDrop">
          <li class="dpd-item">
            <a class="dpd-action" @click="openDrop = false">
              <i class="fas fa-minus-circle"></i>
              <span>remover</span>
            </a>
          </li>
          <li class="dpd-item">
            <a class="dpd-action">
              <i class="fas fa-plus-circle"></i>
              <span>Adicionando</span>
            </a>
          </li>
          <li class="dpd-item">
            <a class="dpd-action">
              <i class="fas fa-plus-circle"></i>
              <span>Adicionando</span>
            </a>
          </li>
        </ul>
      </transition>
    </div>
    <ul class="dnd-list">
      <li class="dnd-item" v-for="(item, i) of listItems" :key="i">
        <!-- CRIAR COMPONENTE -->
        <a class="dnd-action">
          <p class="card-title">{{ item.description }}</p>
          <div class="icons-act">
            <div class="list-icons">
              <button class="btn">
                <i class="fa fa-plus"></i>
              </button>
              <button class="btn">
                <i class="fa fa-plus"></i>
              </button>
              <button class="btn">
                <i class="fa fa-plus"></i>
              </button>
            </div>
            <button class="btn-auth">
              <p class="auth">{{ letras(item.auth) }}</p>
            </button>
          </div>
        </a>
      </li>
    </ul>
    <button class="added">
      <i class="fa fa-plus"></i>
      <span>Adicionar outro cartão</span>
    </button>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { DranAndDrop } from '../../model/dndElement';

@Component({})
export default class DNDList extends Vue {

  @Prop() title?: string;
  @Prop() listItems?: DranAndDrop [];

  public openDrop = false;


  public letras = (item: string) => {
    let data = null;
    item.replace(' ', (r, b, a) => data = a.charAt(0) + a.charAt(b + 1));
    return data;
  }

}
</script>

<style lang="scss" scoped>
  @import './DNDList.scss';
</style>