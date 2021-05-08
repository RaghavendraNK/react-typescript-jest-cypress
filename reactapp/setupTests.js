import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import sinon from 'sinon';
import { expect } from 'chai';
export const mockHistoryPush = jest.fn();

configure({ adapter: new Adapter() });
global.expect = expect;
global.sinon = sinon;

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));
