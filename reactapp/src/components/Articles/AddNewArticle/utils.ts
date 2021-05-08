import { FormListType } from 'slick-react-ui-components';

const formList: FormListType[] = [
    {
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        cols: [
            {
                id: 'title',
                colcss: 'page-form-col',
                name: 'title',
                type: 'TextField',
                variant: 'outlined',
                label: 'Title',
            },
        ],
    },
    {
        sizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        cols: [
            {
                id: 'description',
                colcss: 'page-form-col',
                name: 'description',
                type: 'TextField',
                variant: 'outlined',
                label: 'Description',
                multiline: true,
                rows: 5,
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
    title: '',
    description: '',
    imgBase64: '',
};
export { formList, ActionTypes, initialValues };
