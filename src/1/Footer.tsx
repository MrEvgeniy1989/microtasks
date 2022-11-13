import React from 'react';

type FooterTypeProps = {
    titleForFooter: string
}

export const Footer: React.FC<FooterTypeProps> = (props) => {
    return (
        <div>
            {props.titleForFooter}
        </div>
    );
}