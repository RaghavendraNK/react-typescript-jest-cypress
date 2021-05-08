import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GridContainer } from 'slick-react-ui-components';
import { Home } from '../index';
import { mockHistoryPush } from '../../../../setupTests';

describe('Home', () => {
    let wrapper: ShallowWrapper;
    beforeAll(() => {
        wrapper = shallow(<Home />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    describe('DOM', () => {
        it('should render GridContainer', () => {
            const component = wrapper.find(GridContainer);
            expect(component).toHaveLength(1);
        });
        it('should render statistics', () => {
            const stats = wrapper.find(GridContainer).props().items;
            stats[0].props.details.handleClick('/addNewArticle');
            expect(mockHistoryPush).toHaveBeenCalledTimes(1);
        });
    });
});
