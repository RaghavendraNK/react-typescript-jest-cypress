import React from 'react';
import loadable from '@loadable/component';

const SignIn = loadable(() => import('./components/SignIn'));
const SignUp = loadable(() => import('./components/SignUp'));
const HomePage = loadable(() => import('./components/Home'));
const AddNewArticle = loadable(
    () => import('./components/Articles/AddNewArticle')
);
const ManageArticles = loadable(
    () => import('./components/Articles/ManageArticles')
);
const ViewArticles = loadable(
    () => import('./components/Articles/ViewArticles')
);
const ArticleDetails = loadable(
    () => import('./components/Articles/ArticleDetails')
);
const EditProfile = loadable(() => import('./components/EditProfile'));

export interface RouteItem {
    path: string;
    component: JSX.Element;
}
export const routes: RouteItem[] = [
    {
        path: '/signin',
        component: <SignIn />,
    },
    {
        path: '/signup',
        component: <SignUp />,
    },
];

export const loggedRoutes: RouteItem[] = [
    {
        path: '/home',
        component: <HomePage />,
    },
    {
        path: '/addNewArticle',
        component: <AddNewArticle />,
    },
    {
        path: '/manageArticles',
        component: <ManageArticles />,
    },
    {
        path: '/articles',
        component: <ViewArticles />,
    },
    {
        path: '/articledetails',
        component: <ArticleDetails />,
    },
    {
        path: '/editProfile',
        component: <EditProfile />,
    },
];
