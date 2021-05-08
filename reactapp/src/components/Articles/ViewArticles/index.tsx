import React from 'react';
import loadable from '@loadable/component';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useSelector } from 'react-redux';

import {
    BreadCrumbs,
    BreadCrumbType,
    Card,
    GridContainer,
} from 'slick-react-ui-components';

import VisibilityIcon from '@material-ui/icons/Visibility';

import { language, setlanguage } from '../../../utils';

const PageHeader = loadable(() => import('../../Utils/PageHeader'));

export interface Props {}

export const paths: BreadCrumbType[] = [
    {
        id: 'homeLink',
        path: '/home',
        label: 'Home',
    },
    {
        id: 'articles',
        path: '/articles',
        label: 'Articles',
    },
];
export const ViewArticles = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation(language);
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    );
    const messages = {
        header: t(`${setlanguage}:viewarticle-header`),
        description: t(`${setlanguage}:viewarticle-description`),
        view: t(`${setlanguage}:view`),
    };
    const cards =
        articles &&
        articles.map((article: IArticle) => {
            const { title, description, imgBase64 } = article;
            return (
                <Card
                    key={`article-${title}`}
                    details={{
                        title,
                        description,
                        actions: [
                            {
                                key: 'view',
                                label: messages.view,
                                icon: <VisibilityIcon />,
                                type: 'view',
                                path: '/viewarticle',
                            },
                        ],
                        handleClick: function noRefCheck() {
                            history.push('/articledetails');
                        },
                        icon: (
                            <img
                                alt=""
                                height="100"
                                src={imgBase64}
                                width="200"
                            />
                        ),
                    }}
                    type="CardContent"
                />
            );
        });

    return (
        <div id="articles">
            <BreadCrumbs
                paths={paths}
                handleClick={(path: string) => history.push(path)}
            />
            <PageHeader
                header={messages.header}
                description={messages.description}
            />
            <div className="cards-section">
                <GridContainer
                    containerCss=""
                    itemCss=""
                    items={cards}
                    name="uniqueName"
                    sizes={{
                        lg: 4,
                        md: 4,
                        sm: 12,
                        xs: 12,
                    }}
                    spacing={2}
                />
            </div>
        </div>
    );
};

export default ViewArticles;
