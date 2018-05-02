import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableTemplate from '../../helper/tableTemplate/tableTemplate.jsx';

import PlayerRegistrationList from '../applications/playerRegList';

configure({ adapter: new Adapter() });

test('shallow render test of player registration list', (assert) => {
  const headers = [
    { label: "Last Name" },
    { label: "First Name" },
    { label: "Email" },
    { label: "Phone Number" },
    { label: "View" },
    { label: "Approve" },
    { label: "Delete" }
  ];
  const rows = [
    [
      { label: "test" },
      { label: "test" },
      { label: "test" },
      { label: "test" },
      { label: "test" },
      { label: "test" },
      { label: "test" }
    ]
  ];

  const wrapper = shallow(
    <PlayerRegistrationList
      headers = {headers}
      rows = {rows}
    />
  );

  assert.equal(wrapper.contains(TableTemplate), true,
  'PlayerRegistrationList is not a TableTemplate' );

  assert.end();
});
