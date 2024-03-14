import React from 'react';
import renderer from 'react-test-renderer';

import Winning from '../components/Winning';

describe('<Winning />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Winning />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
