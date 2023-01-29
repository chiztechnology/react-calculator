/**
* @jest-environment jsdom
*/

import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../src/components/Home';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
