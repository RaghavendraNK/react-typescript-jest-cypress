/**
 * * third-party
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/**
 * * core
 */
import { Button, Logo, TextField } from 'slick-react-ui-components';

/**
 * * icons
 */
import logowithTitle from '../../assets/icons/LogoTitle.svg';

import { language, setlanguage } from '../../utils';

export interface Props {}

export const SignIn = (): JSX.Element => {
    const history = useHistory();
    const { t } = useTranslation(language);
    const messages = {
        emailaddress: t(`${setlanguage}:emailaddress`),
        password: t(`${setlanguage}:password`),
        signin: t(`${setlanguage}:signin`),
        noaccount: t(`${setlanguage}:noaccount`),
        signuphere: t(`${setlanguage}:signuphere`),
    };
    const handleSignUp = (): void => {
        history.push('/signup');
    };
    const handleSignIn = (): void => {
        history.push('/home');
    };
    return (
        <div id="signIn">
            <div className="sign-in">
                <div className="sign-in-form">
                    <div className="logo-wrapper form-row mar-b-16">
                        <Logo
                            width={112}
                            height={28}
                            isLogoWithTitle
                            logoTitle={logowithTitle}
                        />
                    </div>
                    <div className="form-row mar-b-16">
                        <TextField
                            id="emailAddressTxtField"
                            label={messages.emailaddress}
                            variant="outlined"
                        />
                    </div>
                    <div className="form-row mar-b-8">
                        <TextField
                            id="passwordTxtField"
                            label={messages.password}
                            variant="outlined"
                            type="password"
                        />
                    </div>
                    <div className="form-row">
                        <Button
                            id="signInBtn"
                            label={messages.signin}
                            variant="filled"
                            dense={40}
                            onClick={() => handleSignIn()}
                        />
                    </div>
                </div>
                <div className="sign-up-here-section">
                    <div className="sign-up-helper-message">
                        {messages.noaccount}
                    </div>{' '}
                    <Button
                        id="signUpLink"
                        label={messages.signuphere}
                        variant="link"
                        onClick={() => handleSignUp()}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
