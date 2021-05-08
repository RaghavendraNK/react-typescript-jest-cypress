interface IArticle {
    id: number;
    title: string;
    description: string;
    imgBase64: string;
}

type ArticleState = {
    articles: IArticle[];
};

type ArticleAction = {
    type: string;
    article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
