import React from 'react';
import { shallow } from 'enzyme';

import AuthBox from './AuthBox';


it('shows child components', () => {
  const content = <h1>Hello Tests</h1>;
  const wraper = shallow(<AuthBox>{content}</AuthBox>);
  expect(wraper.contains(content)).toEqual(true);
});
