<template>
  <div class="card-container">
    <a class="card-action"
     :id="uuid"
      draggable="true" 
      @dragstart="dragstart"
      @drag.prevent="drag">
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

@Component({})
export default class DNDCard extends Vue {

  @Prop() descriptionCard: string;
  @Prop() auth: string;
  @Prop() uuid: any;

  public styleObj = {
    backgroundColor: '#edf0f9',
    opacity: 0,
    border: '2px solid red',
    zIndex: 3,
    position: 'relative',
    view: 'hidden'
  }

  public handler = (e) => {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

    return false;
  }

  public drag(e) {

    const dt = document.querySelectorAll('.card-container');
    [].forEach.call(dt, (x, i) => {
      x.style.backgroundColor = '#FFF';
      x.style.color = '#FFF';
      x.style.width = '230px';
      x.style.zIndex = '-1';
      x.style.hegth = '200px';
      x.style.border = '2px solid red';
      x.style.position = 'relative';
      // x.style.transform = 'rotate(20deg)';

      // x.addEventListener('dragover', this.handler, false);
    });
  
  }

  public dragstart(e) {
    e.target.classList.add('move');
    e.dataTransfer.setData('card', e.target.id);
  }

}
</script>

<style lang="scss" scoped>
  @import './DNDCard.scss';
</style>