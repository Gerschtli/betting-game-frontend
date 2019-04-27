<template lang="pug">
  v-app
    v-navigation-drawer(
      app
      v-if="isAuthenticated"
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
      v-toolbar-side-icon(@click.stop="drawer = !drawer" v-if="isAuthenticated")
      v-toolbar-title Fußball Tippspiel

      v-spacer(v-if="isAuthenticated")

      v-tooltip(bottom open-delay="1000" v-if="isAuthenticated")
        template(v-slot:activator="{ on }")
          v-btn(icon v-on="on" @click="logout")
            v-icon logout
        span Logout

    v-content
      v-container(fluid)
        router-view

    error-message
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';

import ErrorMessage from '@/components/ErrorMessage.vue';
import { ROUTES } from '@/router';
import { logout } from '@/services/authentication';
import { authenticationNamespace } from '@/store/authentication';
import { LOGOUT } from '@/store/authentication/actions';
import { IS_AUTHENTICATED } from '@/store/authentication/getters';

const AUTHENTICATION = namespace(authenticationNamespace);

@Component({
  components: {
    ErrorMessage,
  },
})
export default class App extends Vue {
  private drawer: boolean = false;
  private items: Array<{ title: string, icon: string, link: string }> = [
    { title: 'Home', icon: 'home', link: '/' },
    { title: 'About', icon: 'question_answer', link: '/about' },
  ];

  @AUTHENTICATION.Action(LOGOUT)
  private actionLogout: any;
  @AUTHENTICATION.Getter(IS_AUTHENTICATED)
  private isAuthenticated: any;

  private async logout(): Promise<void> {
    await this.actionLogout();
    this.$router.push({ name: ROUTES.login });
  }
}
</script>

<style lang="sass">
  body
    margin: 0
</style>
