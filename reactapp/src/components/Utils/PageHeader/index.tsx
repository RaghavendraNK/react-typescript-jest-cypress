/**
 * * third-party
 */
import React, { useContext } from 'react';
/**
 * * core
 */
import { Heading, TextBody } from 'slick-react-ui-components';
/**
 * * utils
 */
import { DimentionContext } from '../../Main';

export interface Props {
    header: string;
    description?: string;
}

export const PageHeader = (props: Props): JSX.Element => {
    const { header, description } = props;
    const isTabletOrMobile: boolean = useContext(DimentionContext);
    const size: 5 | 4 = isTabletOrMobile ? 5 : 4;
    return (
        <div id="pageHeader">
            {header && (
                <div className="page-header">
                    <Heading size={size} text={header} />
                </div>
            )}
            {description && (
                <div className="page-header-helper">
                    <TextBody size={2} text={description} />
                </div>
            )}
        </div>
    );
};

export default PageHeader;
