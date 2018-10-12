import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Books from './Books';

configure({ adapter: new Adapter() });

describe('Books', () => {
  it('renders empty content as specified in the snapshot', () => {
    const component = renderer.create(
      <Books
        books={null}
        addBookUrl='/'
        deleteHandler={()=>{}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders books as specified in the snapshot', () => {
    const component = renderer.create(
      <Books
        books={[
          {
            id: 10,
            url: '/book/10',
            title: 'Ten'
          },
          {
            id: 20,
            url: '/book/20',
            title: 'Twenty'
          }
        ]}
        addBookUrl='/'
        deleteHandler={()=>{}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
