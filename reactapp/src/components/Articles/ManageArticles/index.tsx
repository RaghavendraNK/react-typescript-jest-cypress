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

import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

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
        id: 'manageArticles',
        path: '/manageArticles',
        label: 'Manage articles',
    },
];
export const ManageArticles = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation(language);
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    );
    const messages = {
        header: t(`${setlanguage}:managearticle-header`),
        description: t(`${setlanguage}:managearticle-description`),
        view: t(`${setlanguage}:view`),
        delete: t(`${setlanguage}:delete`),
        update: t(`${setlanguage}:update`),
    };
    const cards =
        articles &&
        articles.map((article) => {
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
                            {
                                key: 'delete',
                                label: messages.delete,
                                icon: <DeleteIcon />,
                                type: 'delete',
                                path: '/deletearticle',
                            },
                            {
                                key: 'edit',
                                label: messages.update,
                                icon: <CreateIcon />,
                                type: 'edit',
                                path: '/editarticle',
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
        <div id="manageArticles">
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
                    name="manageArticles"
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

export default ManageArticles;
