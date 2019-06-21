import { Validator } from 'vee-validate';

function getMessage(key: string, data?: any[]): string {
  if (data === undefined) {
    data = [];
  }

  return Validator.dictionary.getMessage('de', key, data);
}

export {
  getMessage,
};
