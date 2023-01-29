import React from 'react';
import renderer from 'react-test-renderer';

import Display from '../src/components/Display';

it('renders correctly the Displa component when there are no items', () => {
  const tree = renderer
    .create(<Display total="" next="" operation="" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
