<template>
  <div class="card-container">
    <a class="card-action">
      <p class="card-title">{{ descriptionCard ? descriptionCard : 'Not Title' }}</p>
      <div class="card-act">
        <div class="card-icons">
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
          <p class="auth">{{ auth ? auth : '-' }}</p>
        </button>
      </div>
    </a>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';

import { Prop, Emit } from 'vue-property-decorator';
import { DranAndDrop } from '../../model/dndElement';

@Component({})
export default class DNDCard extends Vue {

  @Prop() descriptionCard?: string;
  @Prop() auth!: string;


}
</script>

<style lang="scss" scoped>
  @import './DNDCard.scss';
</style>