import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    BreadCrumbs,
    BreadCrumbType,
    GridContainer,
    Heading,
    TextBody,
} from 'slick-react-ui-components';
import sample from '../../../assets/icons/sample.jpg';

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
        label: 'Manage Articles',
    },
    {
        id: '',
        path: '',
        label: 'FullStack',
    },
];
export const ArticleDetails = (): JSX.Element => {
    const history = useHistory();
    return (
        <div id="articleDetails">
            <BreadCrumbs
                paths={paths}
                handleClick={(path: string) => history.push(path)}
            />
            <Heading size={4} text="Ch.5 FullStack Development" />
            <GridContainer
                containerCss=""
                itemCss=""
                items={[
                    <>
                        <img src={sample} alt="article" className="imgClass" />
                        <div className="articleBody">
                            <TextBody
                                size={2}
                                text=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet."
                            />
                            <TextBody
                                size={2}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                nulla et suscipit senectus blandit mi. Diam vel faucibus diam
                lorem dictum. Varius phasellus blandit egestas malesuada euismod
                risus id semper cursus. Nulla felis et auctor viverra id
                phasellus odio venenatis hac."
                            />

                            <TextBody
                                size={2}
                                text="Diam vel faucibus diam lorem dictum. Varius phasellus blandit
                egestas malesuada euismod risus id semper cursus. Nulla felis et
                auctor viverra id phasellus odio venenatis hac."
                            />
                        </div>
                    </>,
                ]}
                name="articleDetails"
                sizes={{
                    lg: 12,
                    md: 12,
                    sm: 12,
                    xs: 12,
                }}
                spacing={6}
            />
        </div>
    );
};

export default ArticleDetails;
