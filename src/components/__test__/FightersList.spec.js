import React from 'react';
import './EnzymeSetup';
import { shallow } from 'enzyme';
import FightersList from '../FightersList';
import FightersListItem from '../FightersListItem';

const setup = (propOverrides) => {
  const props = Object.assign({
    listData: [],
  }, propOverrides);

  const wrapper = shallow(<FightersList {...props} />);

  return {
    props: props,
    wrapper: wrapper
  };
};

describe('FightersList Component', () => {
  it('rendered a div', () => {
    const { wrapper } = setup();
    const divs = wrapper.find('div');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('rendered a `FightersListItem`', () => {
    const props = {
      listData: [{
        id: '1',
        first_name: 'Default Fighter'
      }]
    };
    const { wrapper } = setup(props);
    const result = wrapper.find(FightersListItem);
    expect(result.length).toBe(1);
  });
});
