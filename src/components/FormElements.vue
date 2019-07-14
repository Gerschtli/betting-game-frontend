<template lang="pug">
  div
    v-text-field(
      v-for="(input, id) in schema"
      v-model="model[id]"
      v-validate="input.rules"
      :autofocus="input.autofocus"
      :data-vv-as="input.label"
      :data-vv-name="id"
      :error-messages="errors.collect(id)"
      :id="id"
      :key="id"
      :label="input.label"
      :name="id"
      :prepend-icon="input.icon"
      :required="input.required"
      :type="input.type"
    )
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FormElements extends Vue {
  @Prop()
  private model: any;
  @Prop()
  private schema: any;

  @Inject()
  private validator: any;

  private created(): void {
    this.$validator = this.validator;
  }
}
</script>
