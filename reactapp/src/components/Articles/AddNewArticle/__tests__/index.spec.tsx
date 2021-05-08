import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { BreadCrumbs, Form, SnackBar } from 'slick-react-ui-components';
import { AddNewArticle, paths } from '../index';
import { mockHistoryPush } from '../../../../../setupTests';
import { initialValues } from '../utils';

describe('AddNewArticle', () => {
    let wrapper: ReactWrapper;

    beforeAll(() => {
        wrapper = mount(<AddNewArticle />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('DOM', () => {
        it('should render BreadCrumbs', () => {
            const breadCrumbs = wrapper.find(BreadCrumbs);
            expect(breadCrumbs).toHaveLength(1);
            expect(breadCrumbs.prop('paths')).toEqual(paths);
            breadCrumbs.prop('handleClick')('/home');
            expect(mockHistoryPush).toHaveBeenCalledWith('/home');
        });

        it('should render Form', () => {
            const component = wrapper.find(Form);
            expect(component).toHaveLength(1);

            const actions = {
                resetForm: () => {},
            };
            act(() => {
                component
                    .props()
                    .handleFormSubmit(
                        { ...initialValues, title: 'title' },
                        actions
                    );
            });
            wrapper.update();
            expect(wrapper.find(SnackBar).prop('open')).toBeTruthy();
        });
        it('should render SnackBar', () => {
            const component = wrapper.find(SnackBar);
            expect(component).toHaveLength(1);
            act(() => {
                component.prop('onClose')();
            });
            wrapper.update();
            expect(wrapper.find(SnackBar).prop('open')).toBeFalsy();
        });
    });
});
