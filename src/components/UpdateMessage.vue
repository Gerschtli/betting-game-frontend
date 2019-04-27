<template lang="pug">
  v-snackbar(
    v-model="show"
    color="secondary"
    :timeout="0"
    :bottom="true"
    :right="true"
  ) Update verfügbar!
    //- div needed for flex space-between on xs viewport
    div
      v-btn(
        flat
        v-if="!$vuetify.breakpoint.xsOnly"
        @click="update"
      ) Aktualisieren

      v-btn(
        icon
        v-if="$vuetify.breakpoint.xsOnly"
        @click="update"
      )
        v-icon autorenew

      v-btn(
        icon
        @click="resetHandler"
      )
        v-icon close
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { ROUTES } from '@/router';
import { updateNamespace } from '@/store/update';
import { HANDLER } from '@/store/update/getters';
import { RESET } from '@/store/update/mutations';

const UPDATE = namespace(updateNamespace);
const TIMEOUT = 6000;

@Component
export default class UpdateMessage extends Vue {
  @UPDATE.Getter(HANDLER)
  private updateHandler: any;
  @UPDATE.Mutation(RESET)
  private resetHandler: any;

  private get show(): boolean {
    return this.updateHandler !== undefined;
  }

  private update(): void {
    this.updateHandler();
  }
}
</script>
