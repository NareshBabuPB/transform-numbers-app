import React from 'react';
import TransformNumbers from '../index';
import Form from '../form'
import { shallow } from 'enzyme';

it('TransformNumbers component renders successfully with Form', () => {
    const wrapper = shallow(<TransformNumbers/>);
    expect(wrapper.contains(<Form/>)).toBe(true);
});