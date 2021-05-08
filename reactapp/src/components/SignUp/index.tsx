/**
 * * third-party
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/**
 * * core
 */
import { Button, Logo, TextField, CheckBox } from 'slick-react-ui-components';

/**
 * * icons
 */
import logowithTitle from '../../assets/icons/LogoTitle.svg';

import { language, setlanguage } from '../../utils';

export interface Props {}

const TermsAndConditions = (): JSX.Element => (
    <p className="terms-and-conditions">
        By signing up, you are agreeing to the{' '}
        <span className="link">terms of service</span> &amp;{' '}
        <span className="link">privacy policy</span>
    </p>
);

export const SignUp = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation(language);
    const messages = {
        emailaddress: t(`${setlanguage}:emailaddress`),
        newpassword: t(`${setlanguage}:newpassword`),
        signup: t(`${setlanguage}:signup`),
        haveaccount: t(`${setlanguage}:haveaccount`),
        signuphere: t(`${setlanguage}:signuphere`),
        signinhere: t(`${setlanguage}:signinhere`),
    };
    const handleSignIn = (): void => {
        history.push('/signin');
    };
    return (
        <div id="signUp">
            <div className="sign-up">
                <div className="sign-up-form">
                    <div className="logo-wrapper form-row mar-b-16">
                        <Logo
                            width={112}
                            height={28}
                            isLogoWithTitle
                            logoTitle={logowithTitle}
                        />
                    </div>

                    <div className="form-row mar-b-20">
                        <TextField
                            id="emailAddressTxtField"
                            label={messages.emailaddress}
                            variant="outlined"
                        />
                    </div>
                    <div className="form-row mar-b-12">
                        <TextField
                            id="passwordTxtField"
                            label={messages.newpassword}
                            variant="outlined"
                            type="password"
                        />
                    </div>
                    <div className="form-row link mar-b-20">
                        <CheckBox checked text={<TermsAndConditions />} />
                    </div>
                    <div className="form-row">
                        <Button
                            id="signUpBtn"
                            label={messages.signuphere}
                            variant="filled"
                            dense={40}
                        />
                    </div>
                </div>
                <div className="sign-up-here-section">
                    <div className="sign-up-helper-message">
                        {messages.haveaccount}
                    </div>{' '}
                    <Button
                        id="signUpLink"
                        label={messages.signinhere}
                        variant="link"
                        onClick={() => handleSignIn()}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
