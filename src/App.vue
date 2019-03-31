<template lang="pug">
  v-app
    v-toolbar(app)
      v-toolbar-title(class="headline text-uppercase")
        span Vuetify
        span(class="font-weight-light") MATERIAL DESIGN
      v-spacer
      v-btn(
        flat,
        href="https://github.com/vuetifyjs/vuetify/releases/latest",
        target="_blank"
      )
        span(class="mr-2") Latest Release

    v-content
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style lang="sass">
  body
    margin: 0
</style>
