<template lang="pug">
  v-snackbar(
    v-model="show"
    color="secondary"
    :timeout="0"
    :bottom="true"
    :right="true"
  ) Update verfügbar!
    v-btn(
      flat
      v-if="!$vuetify.breakpoint.xsOnly"
      @click="updateHandler"
    ) Aktualisieren

    v-btn(
      icon
      v-if="$vuetify.breakpoint.xsOnly"
      @click="updateHandler"
    )
      v-icon autorenew
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { ROUTES } from '@/router';
import { updateNamespace } from '@/store/update';
import { HANDLER } from '@/store/update/getters';

const UPDATE = namespace(updateNamespace);
const TIMEOUT = 6000;

@Component
export default class UpdateMessage extends Vue {
  @UPDATE.Getter(HANDLER)
  private updateHandler: any;

  private get show(): boolean {
    return this.updateHandler !== undefined;
  }
}
</script>
