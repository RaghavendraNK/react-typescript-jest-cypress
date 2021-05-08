import React from 'react';
import { act } from 'react-dom/test-utils';
import { ReactWrapper, mount } from 'enzyme';
import { BreadCrumbs, Form, SnackBar } from 'slick-react-ui-components';
import { EditProfile, paths } from '../index';
import { mockHistoryPush } from '../../../../setupTests';
import { initialValues } from '../utils';

describe('EditProfile', () => {
    let wrapper: ReactWrapper;
    beforeAll(() => {
        wrapper = mount(<EditProfile />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('DOM', () => {
        it('should render BreadCrumbs', () => {
            const breadCrumbs = wrapper.find(BreadCrumbs);
            expect(breadCrumbs).toHaveLength(1);
            expect(breadCrumbs.prop('paths')).toEqual(paths);
            breadCrumbs.props().handleClick('/home');
            expect(mockHistoryPush).toHaveBeenCalledWith('/home');
        });

        it('should render Form', () => {
            const component = wrapper.find(Form);
            expect(component).toHaveLength(1);

            const actions = {
                resetForm: () => {},
            };
            act(() => {
                component.props().handleFormSubmit(initialValues, actions);
            });
            wrapper.update();
            expect(wrapper.find(SnackBar).prop('open')).toBeTruthy();
        });
        it('should render SnackBar', () => {
            const component = wrapper.find(SnackBar);
            expect(component).toHaveLength(1);
            act(() => {
                component.props().onClose();
            });
            wrapper.update();
            expect(wrapper.find(SnackBar).prop('open')).toBeFalsy();
        });
    });
});
