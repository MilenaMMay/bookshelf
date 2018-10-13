import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ColoredLink from '../components/ColoredLink';
import PrimaryCommand from '../components/PrimaryCommand';
import SecondaryCommand from '../components/SecondaryCommand';
import PageTitle from '../components/PageTitle';
import TextContent from '../components/TextContent';
import TextInput from '../components/TextInput';
import ListEntry from '../components/ListEntry';
import List from '../components/List';
import ControlHeader from '../components/ControlHeader';

import BookDetail from '../pages/BookDetail';
import NewBook from '../pages/NewBook';
import Books from '../pages/Books';

storiesOf('components', module)

  .add('ColoredLink', () => <ColoredLink>Foo</ColoredLink>)

  .add('PrimaryCommand', () => <PrimaryCommand>Foo</PrimaryCommand>)

  .add('SecondaryCommand', () => <SecondaryCommand>Foo</SecondaryCommand>)

  .add('PageTitle', () => <PageTitle>Foo</PageTitle>)

  .add('TextContent', () => <TextContent>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</TextContent>)

  .add('TextInput', () => <TextInput
    label='Foo'
    inputHandler={(value) => { console.log('Input: ' + value)}}
  />)

  .add('ListEntry', () => <table><tbody><ListEntry
      id={10}
      url='/'
      title='Foo bar - bar foo!'
      date='10/12/2018'
      deleteHandler={() => { console.log('delete'); } }
    ></ListEntry></tbody></table>)

  .add('List', () => <List
      items={[
        {
          id: 1,
          url: '/',
          title: 'Foo bar - bar foo!',
          date: '10/12/2018'
        },
        {
          id: 2,
          url: '/',
          title: 'Bar bar - foo foo!',
          date: '11/12/2018'
        }
      ]}
      deleteHandler={(id) => { console.log('delete: ' + id); } }
    ></List>)

  .add('ControlHeader', () => <ControlHeader addUrl='/'/>)


storiesOf('pages', module)

  .add('Books - empty content', () => <Books
    books={null}
    addBookUrl='/'
    deleteHandler={(id) => { console.log('delete: ' + id); } }
  />)

  .add('Books - with content', () => <Books
    books={[
      {
        id: 1,
        url: '/',
        title: 'Foo bar - bar foo!',
        date: '10/12/2018'
      },
      {
        id: 2,
        url: '/',
        title: 'Bar bar - foo foo!',
        date: '11/12/2018'
      }
    ]}
    addBookUrl='/'
    deleteHandler={(id) => { console.log('delete: ' + id); } }
  />)

  .add('BookDetail', () => <BookDetail
    book={
      {
        title: 'Foo',
        details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      }
    }
    backUrl='/'
  />)

  .add('NewBook', () => <NewBook
    saveHandler={(title, details) => {
      console.log('Title: ' + title);
      console.log('Details: ' + details);
    }}
    backUrl='/'
  />)

