import React from 'react';
import renderer from 'react-test-renderer';

import BookDetail from './BookDetail';

it('renders as specified in the snapshot', () => {
  const component = renderer.create(
    <BookDetail title='Foo' details='Foo bar lorem ipsum dolor foo bar.'/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
