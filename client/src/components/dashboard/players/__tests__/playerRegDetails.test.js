import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlayerApplication from '../applications/playerRegDetails.jsx';

configure({ adapter: new Adapter() });

test('playerRegDetails loading screen displayed properly', (assert) => {
  const location = {
    state: ''
  };

  const wrapper = shallow(
    <PlayerApplication
      location = {location}
      history = { {} }
      />
  );

  assert.equal(wrapper.contains('...Loading'), true,
"playerRegDetails loading screen is not displaying when player prop is null");

  assert.end();
});

test('Given some values, the player details in PlayerApplication are displayed', (assert) => {

  const location = {
    state: {
      player: {
        fullName: 'test',
        email: 'test',
        phoneNum: 'test',
        address: {
          street: 'test',
          city: 'test',
          state: 'test',
          country: 'test'
        }
      }
    }
  }

  const wrapper = shallow(
    <PlayerApplication
      location = {location}
      history = { {} }
      />
  );

  assert.equal(wrapper.type(), 'div', true,
"Given some values, the player details in PlayerApplication are NOT displayed");

  assert.end();
})
