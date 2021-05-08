import React from 'react';
import { shallow, ShallowRendererProps } from 'enzyme';
import { BreadCrumbs, GridContainer, Heading } from 'slick-react-ui-components';
import { ArticleDetails, paths } from '../index';
import { mockHistoryPush } from '../../../../../setupTests';

describe('ArticleDetails', () => {
    let wrapper: ShallowRendererProps;

    beforeAll(() => {
        wrapper = shallow(<ArticleDetails />);
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
        it('should render Heading', () => {
            const component = wrapper.find(Heading);
            expect(component).toHaveLength(1);
        });
        it('should render GridContainer', () => {
            const component = wrapper.find(GridContainer);
            expect(component).toHaveLength(1);
        });
    });
});
