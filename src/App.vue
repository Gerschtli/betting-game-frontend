<template lang="pug">
  v-app
    v-navigation-drawer(
      app
      v-model="drawer"
      absolute
      temporary
    )
      v-toolbar(flat)
        v-list
          v-list-tile
            v-list-tile-title(class="title") Navigation

      v-divider

      v-list(dense class="pt-4")
        v-list-tile(
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        )
          v-list-tile-action
            v-icon {{ item.icon }}

          v-list-tile-content
            v-list-tile-title {{ item.title }}

    v-toolbar(app dark color="primary")
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Fußball Tippspiel

      v-spacer

      v-btn(icon)
        v-icon more_vert

    v-content
      v-container(fluid)
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private drawer: boolean = false;
  private items: Array<{ title: string, icon: string, link: string }> = [
    { title: 'Home', icon: 'home', link: '/' },
    { title: 'About', icon: 'question_answer', link: '/about' },
    { title: 'Login', icon: 'exit_to_app', link: '/login' },
  ];
}
</script>

<style lang="sass">
  body
    margin: 0
</style>
