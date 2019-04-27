<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4)
        v-card(class="elevation-12")
          v-form(@submit.prevent="onSubmit")
            v-card-text
              v-text-field(
                prepend-icon="person"
                name="username"
                label="Benutzername"
                type="text"
                v-model="username"
                v-validate="'required'"
                :error-messages="errors.collect('username')"
                data-vv-name="username"
                data-vv-as="Benutzername"
                required
              )
              v-text-field(
                prepend-icon="lock"
                name="password"
                label="Passwort"
                type="password"
                v-model="password"
                v-validate="'required'"
                :error-messages="errors.collect('password')"
                data-vv-name="password"
                data-vv-as="Passwort"
                required
              )
            v-card-actions
              v-spacer
              v-btn(color="primary" type="submit") Login
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';

import { ROUTES } from '@/router';
import { login } from '@/services/authentication';
import { authenticationNamespace } from '@/store/authentication';
import { LOGIN } from '@/store/authentication/actions';
import { errorNamespace } from '@/store/error';
import { SET } from '@/store/error/mutations';

const authentication = namespace(authenticationNamespace);
const error = namespace(errorNamespace);

@Component
export default class Login extends Vue {
  private username: string = 'abcdef';
  private password: string = '123456';

  @authentication.Action(LOGIN)
  private actionLogin: any;
  @error.Mutation(SET)
  private setError: any;

  private async onSubmit() {
    if (!await this.$validator.validateAll()) {
      return;
    }

    const success = await this.actionLogin(
      { username: this.username, password: this.password },
    );

    if (success) {
      let route: { name?: string, path?: string } = { name: ROUTES.home };
      if (this.$route.params.nextUrl) {
        route = { path: this.$route.params.nextUrl };
      }

      this.$router.push(route);
    } else {
      this.setError({ message: 'Benutzername und/oder Passwort falsch.' });
    }
  }
}
</script>
