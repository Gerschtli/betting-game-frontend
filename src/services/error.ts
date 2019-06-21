import { ApiError, InputValidationError, Unauthorized } from '@/errors';
import { getMessage } from '@/helpers/messages';
import { router, ROUTES } from '@/router';
import store from '@/store';
import { errorNamespace } from '@/store/error';
import { SET } from '@/store/error/mutations';

export function logError(error: ApiError): void {
  let message = `Ein unerwarter Fehler ist aufgetreten. Bitte noch einmal versuchen oder den
    Fehler melden.`;

  if (error instanceof InputValidationError) {
    const general = error.getGeneral();
    if (general === undefined) {
      return;
    }

    message = getMessage(general.type);
  }

  if (error instanceof Unauthorized) {
    message = 'Login abgelaufen, bitte neu einloggen.';
    router.push({
      name: ROUTES.login,
      params: { nextUrl: router.currentRoute.fullPath },
    });
  }

  store.commit(`${errorNamespace}/${SET}`, { message });
}
