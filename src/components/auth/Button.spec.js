import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';


it('shows button with text', () => {
  const text = 'Hello world!';
  const wraper = shallow(<Button text={text} />);
  expect(wraper.find('button').text()).toEqual(text);
});
