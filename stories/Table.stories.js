/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import LoadData from './LoadData';
import { Table, TableCaption as Caption, TableColumn as Column } from '../lib/';

const sample = [
  {
    name: 'Jennifer',
    age: 30,
    gender: 'Female',
    Job: 'Front-end',
  },
  {
    name: 'Oliver',
    age: 18,
    gender: 'Female',
  },
  {
    name: 'Jordan',
    age: 53,
    gender: 'Male',
    test: 'haha'
  }
];

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo(`info`)(
      withNotes('This is slider')(() => (
        <Table
          textAlign={select('textAlign', {left: 'left', center: 'center' ,right: 'right'}, 'left')}
          data={sample}
          caption={<Caption>Caption</Caption>}
        >
          <Column title="Name" field="name" className="test" />
          <Column title="Age" field="age" className="test2" />
        </Table>
      ))
    )
  )
  .add('fetch from external data', () => (
    <LoadData url="https://jsonplaceholder.typicode.com/photos">
      {data => (
        <Table data={data}>
          <Column title="Album Number" field="albumId" className="test" />
          <Column title="Link" field="url" className="test2" />
        </Table>
      )}
    </LoadData>
  ));
