import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});
export default schema;
