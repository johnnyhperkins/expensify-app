import React from 'react';
import { shallow } from 'enzyme';
//only renders the given component, not the full DOM
import ReactShallowRenderer from 'react-test-renderer/shallow';
import NotFoundPage from '../../components/NotFoundPage';

test('should render the not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); 
});