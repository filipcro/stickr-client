import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

it('renders component', () => {
  const wraper = shallow(<Spinner />);
  expect(wraper.exists('div > span')).toEqual(true);
});
