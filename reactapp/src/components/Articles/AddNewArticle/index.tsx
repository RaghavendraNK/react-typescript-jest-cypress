/**
 * * third-party
 */
import React, { useReducer, useState } from 'react';
import loadable from '@loadable/component';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * * core
 */
import {
    BreadCrumbs,
    BreadCrumbType,
    SnackBar,
    Form,
} from 'slick-react-ui-components';

/**
 * * schema
 */
import schema from './schema';

/**
 * * utils
 */
import { ActionTypes, formList, initialValues } from './utils';
import { language, setlanguage } from '../../../utils';

const PageHeader = loadable(() => import('../../Utils/PageHeader'));

export interface Props {}

interface FORM {
    title: string;
    description: string;
    imgBase64: string;
}

export interface State {
    formData: FORM;
}

interface ACTION {
    type: string;
}

export const paths: BreadCrumbType[] = [
    {
        id: 'homeLink',
        path: '/home',
        label: 'Home',
    },
    {
        id: 'addNewArticle',
        path: '/addNewArticle',
        label: 'Add new article',
    },
];
export const AddNewArticle = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation(language);
    const [isShowNotification, setIsShowNotification] = useState<boolean>(
        false
    );
    const messages = {
        header: t(`${setlanguage}:addnewarticle-header`),
        description: t(`${setlanguage}:addnewarticle-description`),
        addnewsuccessmessage: t(`${setlanguage}:addnewarticle-message`),
        submit: t(`${setlanguage}:submit`),
    };
    /* eslint-disable */
    const [state, dispatch] = useReducer(
        (state: State, action: ACTION) => {
            switch (action.type) {
                case ActionTypes.CLEAR_FORM: {
                    return { ...state, formData: initialValues };
                }
                default:
                    return state;
            }
        },
        {
            formData: initialValues,
        }
    );

    const { formData } = state;

    const handleFormSubmit = (values: object, actions: any): void => {
        setIsShowNotification(true);
        dispatch({ type: ActionTypes.CLEAR_FORM });
        actions.resetForm();
    };

    const handleNotificationClose = (): void => {
        setIsShowNotification(false);
    };

    return (
        <>
            <div id="addNewArticle">
                <BreadCrumbs
                    paths={paths}
                    handleClick={(path: string) => {
                        history.push(path);
                    }}
                />
                <PageHeader
                    header={messages.header}
                    description={messages.description}
                />
                <Form
                    name="addNewStaff"
                    initialValues={formData}
                    schema={schema}
                    formList={formList}
                    handleFormSubmit={handleFormSubmit}
                    submitBtnText={messages.submit}
                />
            </div>
            <SnackBar
                messasge={messages.addnewsuccessmessage}
                open={isShowNotification}
                onClose={() => handleNotificationClose()}
            />
        </>
    );
};

export default AddNewArticle;
