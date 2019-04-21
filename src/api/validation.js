// @flow
import { t } from '@lingui/macro';

import i18n from '../i18n';

const PASSWORD_MIN_LENGTH = 6; // TODO move to better place

type fieldOptions = {
  minLength?: number,
  maxLength?: number
};

export function fieldValidator(
  input: string,
  required: boolean = true,
  options: fieldOptions = {}
): string {
  if (!input) {
    if (required) {
      return i18n._(t('formError.required')`This field is required.`);
    }
    return '';
  }

  if (options.minLength && input.length < options.minLength) {
    return i18n._(t('formError.minLength')`This field minimum length is ${options.minLength} characters.`);
  }

  if (options.maxLength && input.length > options.maxLength) {
    return i18n._(t('formError.maxLength')`This field maximum length is ${options.maxLength} characters.`);
  }

  return '';
}


export function checkboxValidator(input: boolean) {
  if (!input) {
    return i18n._(t('formError.unchecked')`This checkbox must be checked.`);
  }

  return '';
}


export function emailValidator(input: string, required: boolean = true): string {
  if (!input) {
    if (required) {
      return i18n._(t('formError.requiredEmail')`Email is required.`);
    }
    return '';
  }

  const regex = /\S+@\S+\.\S+/;

  if (!regex.test(input)) {
    return i18n._(t('formError.invalidEmail')`Invalid email format.`);
  }

  return '';
}


export function passwordValidator(input: string, required: boolean = true): string {
  if (!input) {
    if (required) {
      return i18n._(t('formError.requiredPassword')`Password is required.`);
    }
    return '';
  }

  if (input.length < PASSWORD_MIN_LENGTH) {
    return i18n._(t('formError.shortPassword')`Password needs to have ${PASSWORD_MIN_LENGTH} or more characters.`);
  }

  return '';
}


export function confirmedPasswordValidator(
  input: string,
  password: string,
  required: boolean = true
): string {
  if (!input) {
    if (required) {
      return i18n._(t('formError.requiredPasswordConfirmation')`Password confirmation is required.`);
    }
    return '';
  }

  if (input !== password) {
    return i18n._(t('formError.unmatchedPasswords')`Passwords do not match.`);
  }

  return '';
}
