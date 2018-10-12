import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import List from './List';

configure({ adapter: new Adapter() });

const items = [
  {
    id: 10,
    url: '/item/10',
    title: 'Ten'
  },
  {
    id: 20,
    url: '/item/20',
    title: 'Twenty'
  }
];

describe('List', () => {
  it('renders as specified in the snapshot', () => {
    const component = renderer.create(
      <List
        items={items}
        deleteHandler={()=>{}}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls the delete handler with the specific id', () => {
    const mockHandler = jest.fn();

    const list = mount((<List
      deleteHandler={mockHandler}
      items={items}
    />));

    list
      .find('[title="Twenty"]')
      .find('FontAwesomeIcon')
      .simulate('click');

    expect(mockHandler.mock.calls.length).toEqual(1);
    expect(mockHandler.mock.calls[0][0]).toBe(20);
  });
});
