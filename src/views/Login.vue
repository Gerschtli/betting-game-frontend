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
          v-card-text
            v-form
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
            v-btn(color="primary" @click="onSubmit") Login
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { login } from '@/services/authentication';

@Component
export default class Login extends Vue {
  private username: string = 'abcdef';
  private password: string = '123s456';
  private error: boolean = false;

  private async onSubmit() {
    if (!await this.$validator.validateAll()) {
      return;
    }

    const response = await login(this.username, this.password);

    if (response === null) {
      this.error = true;
    } else {
      // tslint:disable no-console
      console.log(response);

      this.$router.push({ name: 'home' });
    }
  }
}
</script>
