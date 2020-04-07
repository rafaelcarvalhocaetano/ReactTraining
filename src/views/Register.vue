<template>
  <div class="register">
    <RegisterForm />
  </div>  
</template>

<script lang="ts">

import Vue from 'vue';

import { Component } from 'vue-property-decorator';

import RegisterForm from '../components/RegisterForm.vue';


@Component({
  components: {
    RegisterForm
  }
})
export default class RegisterView extends Vue {

  public backRouter() {
    this.$router.push('/login');
  }
  
}
</script>