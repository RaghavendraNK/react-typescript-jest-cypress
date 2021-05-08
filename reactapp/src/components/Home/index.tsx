/**
 * * third-party
 */
import React from 'react';
import loadable from '@loadable/component';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

/**
 * * core
 */
import { GridContainer, Card } from 'slick-react-ui-components';

/**
 * * Icons
 */
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreateIcon from '@material-ui/icons/Create';

/**
 * * utils
 */
import { language, setlanguage } from '../../utils';

const PageHeader = loadable(() => import('../Utils/PageHeader'));

export interface Props {}

interface ActionItem {
    key: string;
    label: string;
    icon: JSX.Element;
    type: string;
    path: string;
}
interface CardItem {
    count: number;
    header: string;
    description: string;
    actions: ActionItem[];
}

export const Home = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation(language);
    const messages = {
        header: t(`${setlanguage}:home-header`),
        description: t(`${setlanguage}:home-description`),
        hometotalarticles: t(`${setlanguage}:home-totalarticles`),
        homedescription: t(`${setlanguage}:home-articledescription`),
        addNewArticle: t(`${setlanguage}:home-addNewArticle`),
        manageArticles: t(`${setlanguage}:home-manageArticles`),
    };
    const cards: CardItem[] = [
        {
            count: 3,
            header: messages.hometotalarticles,
            description: messages.homedescription,
            actions: [
                {
                    key: 'addNewArticle',
                    label: messages.addNewArticle,
                    icon: <AddCircleIcon />,
                    type: 'add',
                    path: '/addNewArticle',
                },
                {
                    key: 'manageArticles',
                    label: messages.manageArticles,
                    icon: <CreateIcon />,
                    type: 'edit',
                    path: '/manageArticles',
                },
            ],
        },
    ];
    const items: JSX.Element[] =
        cards &&
        cards.map((card: CardItem, index: number) => {
            const { count, header, description, actions } = card;
            return (
                <Card
                    key={`homenav-${index}`}
                    details={{
                        actions,
                        count,
                        description,
                        header,
                        handleClick: (selected: any) => {
                            if (selected) {
                                history.push(selected.path);
                            }
                        },
                    }}
                    type="CardAction"
                />
            );
        });

    return (
        <div id="home">
            <PageHeader
                header={messages.header}
                description={messages.description}
            />
            <GridContainer
                spacing={2}
                name="settings"
                items={items}
                sizes={{ xs: 12, sm: 12, md: 3, lg: 3 }}
            />
        </div>
    );
};

export default Home;
