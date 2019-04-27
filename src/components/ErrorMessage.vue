<template lang="pug">
  v-snackbar(
    v-model="show"
    color="error"
    :timeout="0"
    :top="true"
  ) {{ message }}
    v-btn(
      flat
      @click="close"
    ) Schließen
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { ROUTES } from '@/router';
import { errorNamespace } from '@/store/error';
import { MESSAGE } from '@/store/error/getters';
import { RESET } from '@/store/error/mutations';

const error = namespace(errorNamespace);
const TIMEOUT = 6000;

@Component
export default class ErrorMessage extends Vue {
  private show: boolean = false;
  private timeoutId: number | undefined = undefined;

  @error.Getter(MESSAGE)
  private message: any;
  @error.Mutation(RESET)
  private resetMessage: any;

  private close(): void {
    this.resetMessage();
    this.show = false;
  }

  @Watch('message')
  private watchMessage(newValue: string | undefined, oldValue: string | undefined): void {
    if (this.timeoutId !== undefined) {
      window.clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    if (newValue !== undefined) {
      this.timeoutId = window.setTimeout(this.close, TIMEOUT);
      this.show = false;

      // dispatch show = true so that transition of snackbar gets triggered
      window.setTimeout(() => {
        this.show = true;
      }, 0);
    }
  }
}
</script>
