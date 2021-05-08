import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/articlesReducer';

const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default store;
