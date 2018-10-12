import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import BookDetail from './BookDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders as specified in the snapshot', () => {
  const component = renderer.create(
    <BookDetail title='Foo' details='Foo bar lorem ipsum dolor foo bar.'/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
