import {
  fieldValidator,
  emailValidator,
  checkboxValidator,
  passwordValidator,
  confirmedPasswordValidator
} from './validation';


it('validates text field', () => {
  const required = fieldValidator('');
  expect(required).not.toEqual('');

  const nonrequired = fieldValidator('', false, { minLength: 10 });
  expect(nonrequired).toEqual('');

  const toShort = fieldValidator('adcd', false, { minLength: 5 });
  expect(toShort).not.toEqual('');
  expect(toShort).not.toEqual(required);

  const toLong = fieldValidator('adcd', false, { maxLength: 3 });
  expect(toLong).not.toEqual('');
  expect(toLong).not.toEqual(required);
  expect(toLong).not.toEqual(toShort);

  const valid = fieldValidator('adcd', true, { minLength: 3, maxLength: 5 });
  expect(valid).toEqual('');
});


it('validates email', () => {
  const required = emailValidator('');
  expect(required).not.toEqual('');

  const nonrequired = emailValidator('', false);
  expect(nonrequired).toEqual('');

  const valid = emailValidator('test@test.com');
  expect(valid).toEqual('');

  const invalid = emailValidator('nonvalid.email');
  expect(invalid).not.toEqual('');
});

it('validates checkbox', () => {
  const checked = checkboxValidator(true);
  expect(checked).toEqual('');

  const unchecked = checkboxValidator(false);
  expect(unchecked).not.toEqual('');
});


it('validates password', () => {
  const valid = passwordValidator('good-password');
  expect(valid).toEqual('');

  const required = passwordValidator('', true);
  expect(required).not.toEqual('');

  const nonrequired = passwordValidator('', false);
  expect(nonrequired).toEqual('');

  const toShort = passwordValidator('123');
  expect(toShort).not.toEqual('');
  expect(toShort).not.toEqual(required);
});


it('validates password confirmation', () => {
  const maching = confirmedPasswordValidator('abcd123', 'abcd123');
  expect(maching).toEqual('');

  const nonmaching = confirmedPasswordValidator('abcd123', 'qwer000');
  expect(nonmaching).not.toEqual('');

  const required = confirmedPasswordValidator('', 'adcd123');
  expect(required).not.toEqual('');

  const nonrequired = confirmedPasswordValidator('', 'adcd123', false);
  expect(nonrequired).toEqual('');
  expect(nonrequired).not.toEqual(required);
});
