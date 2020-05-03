import Vue from 'vue'
import Vuex from 'vuex'

import { dataLocal } from './dataLocal';

Vue.use(Vuex)

export const store = new Vuex.Store(dataLocal)