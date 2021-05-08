import { FormListType } from 'slick-react-ui-components';

const formList: FormListType[] = [
    {
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        cols: [
            {
                id: 'name',
                colcss: 'page-form-col',
                name: 'name',
                type: 'TextField',
                variant: 'outlined',
                label: 'Name',
            },
        ],
    },
    {
        sizes: { xs: 12, sm: 12, md: 6, lg: 6 },
        cols: [
            {
                id: 'oldPassword',
                colcss: 'page-form-col',
                name: 'oldPassword',
                variant: 'outlined',
                label: 'Old Password',
                type: 'password',
            },
            {
                id: 'newPassword',
                colcss: 'page-form-col',
                name: 'newPassword',
                variant: 'outlined',
                label: 'New Password',
                type: 'password',
            },
        ],
    },
    {
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        cols: [
            {
                colcss: 'page-form-col',
                name: 'upload',
                type: 'Upload',
            },
        ],
    },
];

const ActionTypes = {
    CLEAR_FORM: 'CLEAR_FORM',
};

const initialValues = {
    name: '',
    imgBase64: '',
};
export { formList, ActionTypes, initialValues };
