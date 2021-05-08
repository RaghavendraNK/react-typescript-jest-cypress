import reducer from '../reducers/articlesReducer';
import { ADD_ARTICLE, REMOVE_ARTICLE } from '../types/actionTypes';

describe('article reducer', () => {
    it('should return the initial state', () => {
        expect(reducer({ articles: [] }, {})).toEqual({
            articles: [],
        });
    });

    it('should ADD_ARTICLE', () => {
        expect(
            reducer(
                { articles: [] },
                {
                    type: ADD_ARTICLE,
                    article: {
                        id: 1,
                        title: 'title',
                        description: 'description',
                        imgBase64: '',
                    },
                }
            )
        ).toEqual({
            articles: [
                {
                    id: 1,
                    title: 'title',
                    description: 'description',
                    imgBase64: '',
                },
            ],
        });
    });
    it('should REMOVE_ARTICLE', () => {
        expect(
            reducer(
                {
                    articles: [
                        {
                            id: 1,
                            title: 'title',
                            description: 'description',
                            imgBase64: '',
                        },
                    ],
                },
                {
                    type: REMOVE_ARTICLE,
                    article: {
                        id: 1,
                    },
                }
            )
        ).toEqual({ articles: [] });
    });
});
