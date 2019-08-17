<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Counter",
  computed: {
    ...mapGetters('counter', [
      'count'
    ])
  },
  methods: {
    ...mapActions('counter', [
      'increment',
      'decrement'
    ])
  }
};
</script>

