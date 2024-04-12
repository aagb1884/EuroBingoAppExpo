import React from 'react';
import renderer from 'react-test-renderer';

import GetCards from '../components/GetCards';

describe('<GetCards />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<GetCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should call handleGetNewCards when button is pressed', () => {

    const onPressMock = jest.fn();

    const component = renderer.create(
      <GetCards 
      id={"get-cards"}
      onPress={onPressMock}
      />
    )

    const getCardsButton = component.root.findByProps({id: 'get-cards'});
  
      getCardsButton.props.onPress();

      expect(onPressMock).toHaveBeenCalled();
  })
});
