import { ErrorBag } from 'vee-validate';
import { Component, Provide, Vue } from 'vue-property-decorator';

import { getMessage } from '@/helpers/messages';

@Component
export default class FormMixin extends Vue {
  @Provide()
  private validator: any = this.$validator;

  public mapErrors(errors: any, errorBag: ErrorBag, schema: any): void {
    for (const field of Object.keys(errors)) {
      for (const error of errors[field]) {
        errorBag.add({
          field,
          msg: getMessage(
            error.type,
            [
              schema[field].label,
              [...Object.values(error.options)],
            ],
          ),
        });
      }
    }
  }
}
