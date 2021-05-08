import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SideBar, NavBarMenu } from 'slick-react-ui-components';
import { Main, Props } from '../index';
import { mockHistoryPush } from '../../../../setupTests';

describe('Main', () => {
    let wrapper: ShallowWrapper;
    let props: Props;
    beforeAll(() => {
        props = {
            user: {
                name: 'mock',
                role: 'admin',
            },
            children: <div key="child">ChildCOmponents</div>,
        };
        wrapper = shallow(<Main {...props} />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('DOM', () => {
        it('should render SideBar', () => {
            const component = wrapper.find(SideBar);
            expect(component).toHaveLength(1);
            component.prop('handleMenuClick')({ path: '/path' });
            expect(mockHistoryPush).toHaveBeenCalledWith('/path');
        });
        it('should render NavBarMenu', () => {
            const component = wrapper.find(NavBarMenu);
            expect(component).toHaveLength(1);
            component.prop('onMenuClick')();
            wrapper.update();
            expect(wrapper.find(SideBar).props('isOpen')).toBeTruthy();
            component.prop('handleMenuClick')({ path: '/path' });
            expect(mockHistoryPush).toHaveBeenCalledWith('/path');
        });
    });
});
