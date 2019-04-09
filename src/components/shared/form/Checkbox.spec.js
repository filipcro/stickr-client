import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

it('shows checkbox', () => {
  const wraper = shallow(<Checkbox />);

  expect(wraper.exists('label input[type=\'checkbox\']')).toEqual(true);
});

it('shows label text', () => {
  const label = 'Hello world';
  const wraper = shallow(<Checkbox label={label} />);

  expect(wraper.find('label').text()).toEqual(label);
});

it('shows correct value', () => {
  const checked = shallow(<Checkbox label="hey" value />);
  const unchecked = shallow(<Checkbox label="hey" value={false} />);

  expect(checked.find('input').props().checked).toEqual(true);
  expect(unchecked.find('input').props().checked).toEqual(false);
});

it('passes data to parent', (done) => {
  const value = true;

  const callback = jest.fn((x) => {
    expect(x).toEqual(!value);
    done();
  });

  const wraper = shallow(<Checkbox label="hey" value="first value" setValue={callback} />);
  const input = wraper.find('input');
  input.simulate('click');
});

it('displays error message', () => {
  const errorMessage = 'Error message!';

  const wraper = shallow(
    <Checkbox
      label="someLabe"
      value={false}
      error={errorMessage}
    />
  );

  expect(wraper.find('div > span').text()).toEqual(errorMessage);
});
