<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md6 lg4)
        v-card(class="elevation-12")
          v-form(@submit.prevent="onSubmit")
            v-card-text
              form-elements(:errors="errors", :model="model", :schema="schema")
            v-card-actions
              v-spacer
              v-btn(color="primary" type="submit") Login
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import FormElements from '@/components/FormElements.vue';
import FormMixin from '@/mixins/FormMixin';
import { ROUTES } from '@/router';
import { authenticationNamespace } from '@/store/authentication';
import { LOGIN } from '@/store/authentication/actions';
import { errorNamespace } from '@/store/error';
import { RESET, SET } from '@/store/error/mutations';

const AUTHENTICATION = namespace(authenticationNamespace);
const ERROR = namespace(errorNamespace);

@Component({
  components: { FormElements },
})
export default class Login extends Mixins(FormMixin) {
  private model: any = {
    username: '',
    password: '',
  };

  private schema: any = {
    username: {
      autofocus: true,
      icon: 'person',
      label: 'Benutzername',
      required: true,
      rules: 'required',
    },
    password: {
      icon: 'lock',
      label: 'Passwort',
      required: true,
      rules: 'required',
      type: 'password',
    },
  };

  @AUTHENTICATION.Action(LOGIN)
  private actionLogin: any;
  @ERROR.Mutation(RESET)
  private resetError: any;
  @ERROR.Mutation(SET)
  private setError: any;

  private async onSubmit() {
    if (!await this.$validator.validateAll()) {
      return;
    }

    const errors = await this.actionLogin(this.model);

    if (errors) {
      this.mapErrors(errors, this.errors, this.schema);
    } else {
      let route: { name?: string, path?: string } = { name: ROUTES.home };
      if (this.$route.params.nextUrl) {
        route = { path: this.$route.params.nextUrl };
      }

      this.resetError();
      this.$router.push(route);
    }
  }
}
</script>
