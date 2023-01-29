import React from 'react';
import renderer from 'react-test-renderer';

import Quote from '../src/components/Quote';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
