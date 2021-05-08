import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Logo } from 'slick-react-ui-components';
import { SignIn } from '../index';
import { mockHistoryPush } from '../../../../setupTests';

describe('SignIn', () => {
    let wrapper: ShallowWrapper;
    beforeAll(() => {
        wrapper = shallow(<SignIn />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('DOM', () => {
        it('should render Logo', () => {
            const component = wrapper.find(Logo);
            expect(component).toHaveLength(1);
        });
        it('should render signin form', () => {
            expect(wrapper.find({ id: 'emailAddressTxtField' })).toHaveLength(
                1
            );
            expect(wrapper.find({ id: 'passwordTxtField' })).toHaveLength(1);
            expect(wrapper.find({ id: 'signInBtn' })).toHaveLength(1);
            expect(wrapper.find({ id: 'signUpLink' })).toHaveLength(1);
        });
        it('should navigate to dashboard', () => {
            wrapper.find({ id: 'signInBtn' }).simulate('click');
            expect(mockHistoryPush).toHaveBeenCalledWith('/home');
        });
        it('should navigate to sign up', () => {
            wrapper.find({ id: 'signUpLink' }).simulate('click');
            expect(mockHistoryPush).toHaveBeenCalledWith('/signup');
        });
    });
});
