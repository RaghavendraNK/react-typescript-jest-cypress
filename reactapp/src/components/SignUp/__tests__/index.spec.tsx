import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CheckBox, Logo } from 'slick-react-ui-components';
import { SignUp } from '../index';
import { mockHistoryPush } from '../../../../setupTests';

describe('SignUp', () => {
    let wrapper: ShallowWrapper;
    beforeAll(() => {
        wrapper = shallow(<SignUp />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('DOM', () => {
        it('should render Logo', () => {
            const component = wrapper.find(Logo);
            expect(component).toHaveLength(1);
        });
        it('should render signup form', () => {
            expect(wrapper.find({ id: 'emailAddressTxtField' })).toHaveLength(
                1
            );
            expect(wrapper.find({ id: 'passwordTxtField' })).toHaveLength(1);
            expect(wrapper.find(CheckBox)).toHaveLength(1);
            expect(wrapper.find({ id: 'signUpBtn' })).toHaveLength(1);
            expect(wrapper.find({ id: 'signUpLink' })).toHaveLength(1);
        });
        it('should navigate to sign in', () => {
            wrapper.find({ id: 'signUpLink' }).simulate('click');
            expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
        });
    });
});
