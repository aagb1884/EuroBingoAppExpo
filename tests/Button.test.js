import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });
   
  it('should call onPress when the button is pressed', () => {
   
    const onPressMock = jest.fn();

    const component = renderer.create(
      <Button
      isActive={true}
      cliche={"example cliche"}
      onPress={onPressMock}
      key={1}
      />
    )

      const buttonInstance = component.root.findByProps({cliche: 'example cliche'});

      buttonInstance.props.onPress();
   
      expect(onPressMock).toHaveBeenCalled();
});

});