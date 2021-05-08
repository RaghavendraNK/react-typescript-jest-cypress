/**
 * * third-party
 */
import React, { useState, createContext, Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/**
 * * core
 */
import {
    NavBarMenu,
    SideBar,
    ListItemType,
    Logo,
    Button,
} from 'slick-react-ui-components';

/**
 * * icons
 */
import EventNoteIcon from '@material-ui/icons/EventNote';
import Home from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

import logoIcon from '../../assets/icons/Logo.svg';
import logoWithTitle from '../../assets/icons/LogoTitle.svg';

import { language, setlanguage } from '../../utils';

export interface Props {
    user: {
        name: string;
        role: string;
    };
    children: JSX.Element | JSX.Element[];
}
const mainMenuItems = [
    {
        path: '/home',
        icon: <Home />,
        title: 'Home',
    },
    {
        path: '/articles',
        icon: <EventNoteIcon />,
        title: 'Articles',
    },
];
const footerMenuItems = [
    {
        path: '/settings',
        icon: <SettingsIcon />,
        title: 'Settings',
    },
    {
        path: '',
        icon: <ContactSupportIcon />,
        title: 'Support',
    },
];

const avatar = (
    <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="20" cy="20" r="19.5" fill="#EEEEEE" stroke="#BDBDBD" />
    </svg>
);

export const DimentionContext: any = createContext(false);
export const Main = (props: Props): JSX.Element => {
    const { children } = props;
    const [selectedMenu, setSelectedMenu] = useState<ListItemType>(
        mainMenuItems[0]
    );
    const history = useHistory();
    const { t } = useTranslation(language);
    const messages = {
        profile: t(`${setlanguage}:profile`),
        profiledescription: t(`${setlanguage}:profile-description`),
        logout: t(`${setlanguage}:logout`),
    };
    const isTabletOrMobile: boolean = useMediaQuery({
        query: '(max-width: 992px)',
    });
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const handleOnMenuToggleClick = (): void => {
        setIsComponentVisible(!isComponentVisible);
    };

    const handleMenuClick = (selected: ListItemType) => {
        const { path } = selected;
        setSelectedMenu(selected);
        if (path) {
            history.push(path);
        }
    };
    const getMainMenuByViewPort = (): Array<ListItemType> | [] => {
        if (!isTabletOrMobile) {
            const mobileMainMenu = [
                {
                    path: '/editProfile',
                    icon: <PersonIcon />,
                    title: messages.profile,
                    description: messages.profiledescription,
                },
            ];
            return mobileMainMenu;
        }
        return [];
    };

    const getFooterMenuByViewPort = (): Array<ListItemType> | [] => {
        if (!isTabletOrMobile) {
            const mobileFooterMenu = [
                {
                    path: '/signin',
                    icon: <ExitToAppIcon />,
                    title: messages.logout,
                },
            ];
            return mobileFooterMenu;
        }
        return [];
    };

    const SideMenu = () => {
        if (isTabletOrMobile) {
            return (
                <>
                    <SideBar
                        isOpen={isComponentVisible}
                        isTabletOrMobile={isTabletOrMobile}
                        selectedItem={selectedMenu.title}
                        mainMenuItems={mainMenuItems}
                        footerMenuItems={[
                            ...footerMenuItems,
                            {
                                path: '/signin',
                                icon: <ExitToAppIcon />,
                                title: messages.logout,
                            },
                        ]}
                        handleMenuClick={(selected: ListItemType) => {
                            handleMenuClick(selected);
                        }}
                        profileDetails={
                            <>
                                <div className="profile-details-section">
                                    <div className="profile-image">
                                        {avatar}
                                    </div>
                                </div>
                                <div className="manage-profile">
                                    <Button
                                        id="manageProfile"
                                        label="Manage profile"
                                        variant="text"
                                        onClick={() => {
                                            history.push('/editProfile');
                                        }}
                                    />
                                </div>
                            </>
                        }
                        handleSideBarMenuClose={(flag: boolean) => {
                            setIsComponentVisible(flag);
                        }}
                    />
                </>
            );
        }
        return (
            <SideBar
                isTabletOrMobile={isTabletOrMobile}
                selectedItem={selectedMenu.title}
                mainMenuItems={mainMenuItems}
                footerMenuItems={footerMenuItems}
                handleMenuClick={(selected: ListItemType) => {
                    handleMenuClick(selected);
                }}
            />
        );
    };
    return (
        <DimentionContext.Provider value={isTabletOrMobile}>
            <div id="mainSection">
                <NavBarMenu
                    logo={
                        <Logo
                            width={116}
                            height={32}
                            logoTitle={logoWithTitle}
                            logoIcon={logoIcon}
                            isLogoWithTitle
                        />
                    }
                    isTabletOrMobile={isTabletOrMobile}
                    mainMenuItems={getMainMenuByViewPort()}
                    footerMenuItems={getFooterMenuByViewPort()}
                    profileDetails={
                        <div className="profile">
                            <div className="icon">{avatar}</div>
                        </div>
                    }
                    onMenuClick={() => handleOnMenuToggleClick()}
                    handleMenuClick={(selected: ListItemType) => {
                        handleMenuClick(selected);
                    }}
                />
                <div className="content-body">
                    {SideMenu()}
                    <div className="children">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </DimentionContext.Provider>
    );
};

export default Main;
