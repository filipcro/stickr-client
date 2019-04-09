import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

it('renders component', () => {
  const wraper = shallow(<Loading />);
  expect(wraper.exists('div')).toEqual(true);
});
