import * as actions from '../actions/articleActions';

describe('actions', () => {
    it('should create an action to add a article', () => {
        const article = {
            id: 1,
            title: 'title',
            description: 'desc',
            imgBase64: '',
        };

        expect(actions.addArticle(article)).toBeTruthy();
    });
    it('should create an action to remove a article', () => {
        const article = {
            id: 1,
            title: 'title',
            description: 'desc',
            imgBase64: '',
        };

        expect(actions.removeArticle(article)).toBeTruthy();
    });
});
