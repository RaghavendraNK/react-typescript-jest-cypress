import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { PageHeader, Props } from '../index';

describe('PageHeader', () => {
    let wrapper: ShallowWrapper;
    let props: Props;
    beforeAll(() => {
        props = {
            header: 'header',
            description: 'description',
        };
        wrapper = shallow(<PageHeader {...props} />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
