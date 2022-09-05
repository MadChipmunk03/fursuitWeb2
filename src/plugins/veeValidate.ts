import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import i18n from './i18n';

extend('required', {
  ...required,
  message: String(i18n.t('validations.required')),
});

extend('email', {
  ...email,
  message: String(i18n.t('validations.email')),
});

extend('minmax', {
  validate(value, args: any) {
    return value <= Number(args.max) && value >= Number(args.min);
  },
  message: i18n.t('validations.minmax') + ' {min}-{max}',
  params: ['min', 'max'],
});
