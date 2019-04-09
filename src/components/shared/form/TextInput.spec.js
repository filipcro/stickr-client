import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

it('shows label', () => {
  const label = 'someLabel';

  const wraper = shallow(<TextInput label={label} />);

  expect(wraper.is('div')).toEqual(true);
  expect(wraper.find('label').text(label)).toEqual(label);
});

it('has text input', () => {
  const value = 'Hello world!';
  const wraper = shallow(<TextInput label="hey" value={value} />);

  expect(wraper.exists('label input[type=\'text\']')).toEqual(true);

  const input = wraper.find('input');
  expect(input.props().value).toEqual(value);
});

it('show different input type', () => {
  const wraper = shallow(<TextInput type="password" />);

  expect(wraper.exists('label input[type=\'password\']')).toEqual(true);
});

it('passes data to parent', (done) => {
  const value = 'Hello world!';

  const callback = jest.fn((x) => {
    expect(x).toEqual(value);
    done();
  });

  const wraper = shallow(<TextInput label="hey" value="first value" setValue={callback} />);
  const input = wraper.find('input');
  input.simulate('change', { target: { value } });
});

it('displays error message', () => {
  const errorMessage = 'Error message!';

  const wraper = shallow(
    <TextInput
      label="someLabe"
      value="someValue"
      error={errorMessage}
    />
  );

  expect(wraper.find('div > span').text()).toEqual(errorMessage);
});
