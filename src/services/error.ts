import { ApiError, InputValidationError, Unauthorized } from '@/errors';
import { getMessage } from '@/helpers/messages';
import { router, ROUTES } from '@/router';
import store from '@/store';
import { errorNamespace } from '@/store/error';
import { SET } from '@/store/error/mutations';

export function logError(error: ApiError): void {
  let type = 'generalError';

  if (error instanceof InputValidationError) {
    if (!error.general) {
      return;
    }

    type = error.general.type;
  } else if (error instanceof Unauthorized) {
    type = 'loginInvalid';

    router.push({
      name: ROUTES.login,
      params: { nextUrl: router.currentRoute.fullPath },
    });
  }

  store.commit(`${errorNamespace}/${SET}`, { message: getMessage(type) });
}
