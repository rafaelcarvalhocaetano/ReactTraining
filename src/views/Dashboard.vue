<template>
  <div class="dashboard">
    <sidenav />
    <Header :type="2"/>

    <div class="list-dash">
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

      <!-- CRIAR COMPONENTE -->
      <div class="list">
        <div class="added-title">
          <h2>Title 1</h2>
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
          <li class="dnd-item" v-for="(item, i) of listDashboard" :key="i">
            <!-- CRIAR COMPONENTE -->
            <a class="dnd-action">
              <p class="card-title">{{ item }}</p>
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
                  <p class="auth">RC</p>
                </button>
              </div>
            </a>
          </li>
        </ul>
      </div>

        <!-- CRIAR COMPONENTE -->
      <div class="list">
        <div class="added-title">
          <h2>Title 1</h2>
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
          <li class="dnd-item" v-for="(item, i) of listDashboard" :key="i">
            <!-- CRIAR COMPONENTE -->
            <a class="dnd-action">
              <p class="card-title">{{ item }}</p>
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
                  <p class="auth">RC</p>
                </button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>



   




    <modal v-if="openModal" @action="action"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Sidenav from '../components/Sidenav.vue';
import Header from '../components/Header.vue';
import Modal from '../shared/modal/Modal.vue';

@Component({
  components: {
    sidenav: Sidenav,
    Header: Header,
    modal: Modal
  }
})
export default class Dashboard extends Vue {

  public listDashboard: any [] = ["a", "a", "b", "a", "a", "b", "a", "a", "b", "a", "a", "b"];
  public openModal = false;
  public openDrop = false;

  public addList() {
    this.openModal = !this.openModal;
  }

  public action(e: string) {
    this.openModal = false;
    this.listDashboard.push(e);
    console.log("Dashboard -> action -> e", this.listDashboard)
  }
}
</script>

<style lang="scss" scoped>
  @import './Dashboard.scss';
</style>