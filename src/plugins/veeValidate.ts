import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'Pole je povinné',
});

extend('minmax', {
  validate(value, args: any) {
    return value <= Number(args.max) && value >= Number(args.min);
  },
  message: 'Počet pracovních dní musí být v rozmezí od {min} do {max} (včetně)',
  params: ['min', 'max'],
});

// extend('date', {
//   validate(value, { format }: any) {
//     return value && DateTime.fromFormat(value, format).isValid;
//   },
//   message: 'Datum musí být ve formátu {format}',
//   params: ['format'],
// });

// extend('dateBefore', {
//   validate(value, { target, format }: any) {
//     const myDate = DateTime.fromFormat(value, format);
//     const targetDate = DateTime.fromFormat(target, format);
//     return myDate.startOf('day') <= targetDate.startOf('day');
//   },
//   message: 'Počáteční datum neodpovídá konečnému!',
//   params: ['target', 'format'],
// });
