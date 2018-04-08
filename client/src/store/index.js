import Vue from 'vue'
import Vuex from 'vuex'

import counter from './counter'

export * from './counter'

// import * as api from '../api'

// FIXME: Make modules out of this partial stores
// import {cartMutations, cartActions} from './cart'
// import {product, products, productsMutations, productsActions} from './products'
// import {subscriptionsMutations} from './sub'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },

  modules: {
    counter,
  },
})

export default store
