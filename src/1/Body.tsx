import React from 'react';

type BodyTypeProps = {
    titleForBody: string
}

export const Body: React.FC<BodyTypeProps> = (props) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    );
}