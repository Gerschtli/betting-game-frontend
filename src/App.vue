<template lang="pug">
  #app
    Header
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
\:root
  --color-text-dark: #182628
  --color-background-accent: #65CCB8
  --color-accent-light: #57BA98
  --color-accent: #3B945E
  --color-background: #F2F2F2
  --color-overlay: rgba(0, 0, 0, .3)

  --font-family: 'Roboto', sans-serif

html
  box-sizing: border-box

*, *:before, *:after
  box-sizing: inherit

body
  margin: 0
  padding: 0
  font-family: var(--font-family)
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
