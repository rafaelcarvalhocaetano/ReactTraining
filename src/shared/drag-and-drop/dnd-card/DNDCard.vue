<template>
  <div class="card-container">
    <a class="card-action"
     :id="uuid"
      draggable="true" 
      @dragstart="dragstart"
      @dragover="dragover"
      @dragend="dragend"
      @drag="drag">
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

  public drag(e: any) {
    // e.target.style.opacity = this.styleObj.opacity;
    // e.target.style.backgroundColor = this.styleObj.backgroundColor;
    // e.target.style.border = this.styleObj.border;
    // e.target.style.zIndex = this.styleObj.zIndex;
    // e.target.style.visibility = this.styleObj.view;
    // e.target.style.position = this.styleObj.position;
  }

  public dragstart(e: any) {
    const target = e.target;
    e.dataTransfer.setData('card', target.id);  
  }

  public dragend(e: any) {
    e.target.style.opacity
    if (e.target.classList.contains('over')) {
      e.target.classList.remove('over');
    }
  }
  public dragover(e: any) {
    

  }


}
</script>

<style lang="scss" scoped>
  @import './DNDCard.scss';
</style>