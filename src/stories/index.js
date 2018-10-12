import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SecondaryCommand from '../components/SecondaryCommand';
import PageTitle from '../components/PageTitle';
import TextContent from '../components/TextContent';
import ListEntry from '../components/ListEntry';
import List from '../components/List';
import BookDetail from '../pages/BookDetail';

storiesOf('components', module)

  .add('SecondaryCommand', () => <SecondaryCommand>Foo</SecondaryCommand>)

  .add('PageTitle', () => <PageTitle>Foo</PageTitle>)

  .add('TextContent', () => <TextContent>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</TextContent>)

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
        },
      ]}
      deleteHandler={(id) => { console.log('delete: ' + id); } }
    ></List>);


storiesOf('pages', module)

  .add('BookDetail', () => <BookDetail title='Foo' details='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'></BookDetail>)
