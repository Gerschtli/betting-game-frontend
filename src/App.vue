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

      v-tooltip(bottom open-delay="1000")
        template(v-slot:activator="{ on }")
          v-btn(icon v-on="on" @click="logout")
            v-icon logout
        span Logout

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

  async logout() {
    await this.$store.dispatch('authentication/logout');
    console.log('logout');
    console.log(localStorage);
  }
}
</script>

<style lang="sass">
  body
    margin: 0
</style>
