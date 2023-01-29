/**
* @jest-environment jsdom
*/

import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../src/components/Calculator';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
