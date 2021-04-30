import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { expect } from 'chai';

configure({ adapter: new Adapter() });
global.expect = expect;
global.sinon = sinon;
