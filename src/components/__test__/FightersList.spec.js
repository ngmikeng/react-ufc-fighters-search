import React from 'react';
import './EnzymeSetup';
import { shallow } from 'enzyme';
import FightersList from '../FightersList';
import FightersListItem from '../FightersListItem';

const setup = (propOverrides) => {
  const props = Object.assign({
    listData: [{
      id: '1',
      first_name: 'Default Fighter'
    }],
  }, propOverrides);

  const wrapper = shallow(<FightersList {...props} />);

  return {
    props: props,
    wrapper: wrapper
  };
};

describe('FightersList Component', () => {
  it('should renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
