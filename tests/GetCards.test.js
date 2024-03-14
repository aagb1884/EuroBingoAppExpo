import React from 'react';
import renderer from 'react-test-renderer';

import GetCards from '../components/GetCards';

describe('<GetCards />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GetCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
