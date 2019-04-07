<template lang="pug">
  v-container(fluid fill-height)
    v-snackbar(
      v-model="error"
      color="error"
      :timeout="0"
      :bottom="true"
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
            v-form(
              ref="form"
              v-model="valid"
              lazy-validation
            )
              v-text-field(
                prepend-icon="person"
                name="username"
                label="Benutzername"
                type="text"
                v-model="username"
                :rules="usernameRules"
                required
              )
              v-text-field(
                prepend-icon="lock"
                name="password"
                label="Passwort"
                type="password"
                v-model="password"
                :rules="passwordRules"
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
  private valid: boolean = true;
  private error: boolean = false;
  private usernameRules = [
    (v: string) => !!v || 'Username is required',
  ];
  private passwordRules = [
    (v: string) => !!v || 'Password is required',
  ];

  private async onSubmit() {
    const response = await login(this.username, this.password);

    // tslint:disable no-console
    console.log(response);

    if (response === null) {
      this.error = true;
    } else {
      this.$router.push({ name: 'home' });
    }
  }
}
</script>
