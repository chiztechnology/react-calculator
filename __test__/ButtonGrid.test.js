import React from 'react';
import renderer from 'react-test-renderer';

import ButtonPanel from '../src/components/ButtonPanel';

it('renders a Button correctly when there are no items', () => {
  const tree = renderer.create(<ButtonPanel clickHandler={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
