<template>
  <div>
    <button class="button" @click="decrement">-</button>
    <span class="count">{{counter}}</span>
    <button class="button" @click="increment">+</button>
    <button class="button" @click="reset">0</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { INCREMENT, DECREMENT, RESET_COUNT } from '@/store/counter'

export default {
  methods: {
    increment () {
      this.$store.dispatch(INCREMENT)
    },
    decrement () {
      this.$store.dispatch(DECREMENT)
    },
    reset () {
      this.$store.dispatch(RESET_COUNT)
    },
  },
  computed: {
    ...mapState({
      counter: state => state.counter.count,
    }),
  },
}
</script>

<style lang="postcss" scoped>
  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: var(--primaryColor);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 2em;
    height: 2em;
    margin: 1em;
  }

  .count {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
</style>
