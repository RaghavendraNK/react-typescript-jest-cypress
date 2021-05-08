import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BreadCrumbs, GridContainer } from 'slick-react-ui-components';
import { ViewArticles, paths } from '../index';
import { mockHistoryPush } from '../../../../../setupTests';
import { MockProvider } from '../../../../utils/testUtils';

describe('ViewArticles', () => {
    let wrapper: ReactWrapper;
    beforeAll(() => {
        wrapper = mount(
            <MockProvider>
                <ViewArticles />
            </MockProvider>
        );
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('DOM', () => {
        it('should render BreadCrumbs', () => {
            const breadCrumbs = wrapper.find(BreadCrumbs);
            expect(breadCrumbs).toHaveLength(1);
            expect(breadCrumbs.prop('paths')).toEqual(paths);
            breadCrumbs.props().handleClick('/path');
            expect(mockHistoryPush).toHaveBeenCalledWith('/path');
        });

        it('should render GridContainer', () => {
            const component = wrapper.find(GridContainer);
            expect(component).toHaveLength(1);
        });
    });
});
