<template>
  <div>
    <button class="button" @click="decrement">-</button>
    <span class="count">{{counter}}</span>
    <button class="button" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    initialCounter: Number
  },
  data () {
    return {
      counter: this.initialCounter || 0
    }
  },
  methods: {
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    }
  }

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
