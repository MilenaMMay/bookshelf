import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SecondaryCommand from '../components/SecondaryCommand';
import PageTitle from '../components/PageTitle';
import TextContent from '../components/TextContent';

storiesOf('SecondaryCommand', module)
  .add('default', () => <SecondaryCommand>Foo</SecondaryCommand>);

storiesOf('PageTitle', module)
  .add('default', () => <PageTitle>Foo</PageTitle>);

storiesOf('TextContent', module)
  .add('default', () => <TextContent>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</TextContent>);

