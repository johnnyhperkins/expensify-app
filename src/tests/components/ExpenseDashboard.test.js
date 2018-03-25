import React from 'react';
import { shallow } from 'enzyme';
//only renders the given component, not the full DOM
import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpenseDashboardPage from '../../components/NotFoundPage';

test('should render the ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); 
});