<template lang="pug">
  v-container(fluid fill-height)
    v-snackbar(
      v-model="error"
      color="error"
      :timeout="5000"
      :top="true"
    ) Benutzername und/oder Passwort falsch.
      v-btn(
        color="secondary"
        flat
        @click="error = false"
      ) Schließen

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

import { login } from '@/services/authentication';
import { authenticationNamespace } from '@/store/authentication';
import { LOGIN } from '@/store/authentication/actions';

const authentication = namespace(authenticationNamespace);

@Component
export default class Login extends Vue {
  private username: string = 'abcdef';
  private password: string = '123456';
  private error: boolean = false;

  @authentication.Action(LOGIN)
  private actionLogin: any;

  private async onSubmit() {
    if (!await this.$validator.validateAll()) {
      return;
    }

    const success = await this.actionLogin(
      { username: this.username, password: this.password },
    );

    if (success) {
      this.$router.push({ name: 'home' });
    } else {
      this.error = true;
    }
  }
}
</script>
